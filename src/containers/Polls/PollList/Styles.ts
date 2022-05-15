import styled from 'styled-components';

import colors from 'styles/colors';
import {b1, h1} from 'styles/fonts';

import Card from '../components/PollCard';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  ${h1.medium};
  color: ${colors.palette.neutral['900']};
  margin-bottom: 32px;
  margin-top: 60px;
`;

export const PollCard = styled(Card)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ViewMorePollsContainer = styled.div`
  ${b1.regular};
  border-radius: 100px;
  cursor: pointer;
  color: ${colors.palette.cyan['900']};
  border: 1px solid #e3e8ee;
  padding: 10px 16px;
  text-align: center;
  margin: 32px 0;

  :hover {
    background-color: ${colors.palette.gray['075']};
  }
`;
