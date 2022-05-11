import React from 'react';

import {Button} from 'components';
import {URLS, ROUTES} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

import * as S from './Styles';

const TopNavDesktopItems = () => {
  const onClickConnectWallet = () => {
    // TODO: link wallet accordingly when ready
  };

  return (
    <S.Container>
      {isFeatureEnabled(Feature.Polls) && <S.InternalLink to={ROUTES.polls}>Polls</S.InternalLink>}
      <S.ExternalLink href={URLS.discord}>Discord</S.ExternalLink>
      {isFeatureEnabled(Feature.ConnectWallet) && (
        <>
          <S.Separator />
          <S.RightSection>
            <Button onClick={onClickConnectWallet}>Connect Wallet</Button>
          </S.RightSection>
        </>
      )}
    </S.Container>
  );
};

export default TopNavDesktopItems;
