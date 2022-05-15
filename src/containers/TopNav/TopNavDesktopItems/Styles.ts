import styled from 'styled-components';

import {Link as ReactRouterLink} from 'react-router-dom';
import {A} from 'components';
import colors from 'styles/colors';
import {h4} from 'styles/fonts';

export const Separator = styled.div`
  background-color: ${colors.palette.gray['200']};
  height: 25px;
  margin-left: 30px;
  width: 0.5px;
`;

export const RightSection = styled.div`
  display: flex;
  margin-left: 24px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 1366px) {
    display: none;
  }
`;

export const InternalLink = styled(ReactRouterLink)`
  ${h4.regular};
  color: ${colors.white};
  text-transform: capitalize;
  margin-right: 15px;
`;

export const ExternalLink = styled(A)`
  ${h4.regular};
  align-items: center;
  color: ${colors.white};
  display: flex;
  text-transform: capitalize;
`;
