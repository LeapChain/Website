import styled from 'styled-components';

import colors from 'styles/colors';
import {h1} from 'styles/fonts';

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
