import styled, {css, keyframes} from 'styled-components';

import {Link} from 'react-router-dom';
import {A, Button} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import colors from 'styles/colors';
import zIndex from 'styles/zIndex';

const mobileDropdownHeight = '1000px';

const addOverlayAnimation = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const mobileSlideDownAnimation = keyframes`
  from {
    opacity: 0;
    top: calc(${NAVBAR_HEIGHT}px - ${mobileDropdownHeight});
  }
  to {
    opacity: 1;
    top: ${NAVBAR_HEIGHT}px;
  }
`;

export const Container = styled.div`
  display: none;

  @media (max-width: 1366px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
  justify-content: center;
  outline: none;
  position: relative;
  transition: background 0.1s ease-in;
  width: ${NAVBAR_HEIGHT}px;
  z-index: ${zIndex.topNavMobileButton};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const linkStyles = css`
  border: none;
  color: ${colors.white};
  display: block;
  line-height: 1;
  padding: 20px;

  text-align: unset;
  width: fit-content;

  @media (max-width: 992px) {
    width: unset;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ExternalLink = styled(A)`
  ${linkStyles};
`;

export const InternalLink = styled(Link)`
  ${linkStyles};
`;

export const Overlay = styled.div`
  animation: ${addOverlayAnimation} 0.3s forwards;
  height: calc(100vh - ${NAVBAR_HEIGHT}px);
  left: 0;
  outline: none;
  position: fixed;
  top: ${NAVBAR_HEIGHT}px;
  width: 100%;
  z-index: ${zIndex.slideupOverlay};
`;

export const DropdownContainer = styled.div`
  animation: ${mobileSlideDownAnimation} 0.3s forwards;
  background: #0b0b0b;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 6px 6px rgba(4, 34, 53, 0.3);
  display: block;
  height: fit-content;
  left: 0;
  padding: 50px 36px 18px;
  position: fixed;
  top: ${NAVBAR_HEIGHT}px;
  width: 100%;
  z-index: ${zIndex.topNavMobileDropdown};
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 32px 0;

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const DownloadButton = styled(Button)`
  margin-right: 16px;

  @media (max-width: 414px) {
    margin-bottom: 16px;
    margin-right: 0;
    width: 100%;
  }
`;
