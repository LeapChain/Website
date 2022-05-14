import styled from 'styled-components';

import colors from 'styles/colors';
import {h2} from 'styles/fonts';

export const Title = styled.div`
  ${h2.medium};
  color: ${colors.palette.neutral['900']};
  margin-bottom: 16px;
`;

export const Container = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 0px 16px 0px #0b0b0b0a;
  cursor: pointer;
  min-height: 141px;
  padding: 40px 50px;
  width: 600px;

  :hover {
    background-color: ${colors.palette.gray['050']};
  }
`;
