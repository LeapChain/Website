import styled from 'styled-components';

import colors from 'styles/colors';
import {b1} from 'styles/fonts';

export const Container = styled.div`
  ${b1.regular};
  align-items: center;
  color: ${colors.palette.neutral['300']};
  display: flex;
  gap: 10px;
`;
