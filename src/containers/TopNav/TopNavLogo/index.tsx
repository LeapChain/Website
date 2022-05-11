import React, {FC} from 'react';

import LeapLogoWithName from '../../../assets/svgs/LeapLogoWithName';
import * as S from './Styles';

const TopNavLogo: FC = () => (
  <S.LinkContainer to="/">
    <LeapLogoWithName />
  </S.LinkContainer>
);

export default TopNavLogo;
