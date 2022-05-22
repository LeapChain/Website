import React from 'react';

import {Button} from 'components';
import {URLS, ROUTES} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';
import {requestKeysignVerify} from 'utils/keysign';

import * as S from './Styles';

const TopNavDesktopItems = () => {
  const onClickConnectWallet = () => {
    requestKeysignVerify({
      accountNumber: '',
      onFailure: () => console.log('verify failure'), // TODO: handle accordingly
      onSuccess: () => console.log('verify success'), // TODO: handle accordingly
    });
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
