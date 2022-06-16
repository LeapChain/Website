import styled from 'styled-components';

import colors from 'styles/colors';
import {b1, h2} from 'styles/fonts';
import {fontWeightBold} from 'styles/fonts/fontWeights';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const BackToPrevious = styled.div`
  color: ${colors.palette.neutral['900']};
  ${b1.regular};
  cursor: pointer;
  margin-bottom: 36px;
  margin-top: 60px;
`;

export const PollContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 0px 16px 0px #0b0b0b0a;
  color: ${colors.palette.neutral['900']};
  min-height: 380px;
  padding: 40px 50px;
`;

export const PollTitle = styled.div`
  ${h2.medium};
  margin-bottom: 16px;
`;

export const PollDescription = styled.div`
  ${b1.regular};
  margin-bottom: 16px;
`;

export const PollUrl = styled.span`
  color: ${colors.palette.blue['500']};
  cursor: pointer;

  &:hover {
    color: ${colors.palette.blue['500']};
    ${fontWeightBold};
  }
`;

export const PollChoice = styled.div`
  ${b1.regular};
  border: 1px solid ${colors.palette.gray['200']};
  border-radius: 100px;
  cursor: pointer;
  padding: 10px 16px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  :hover {
    background-color: ${colors.palette.gray['075']};
  }
`;
