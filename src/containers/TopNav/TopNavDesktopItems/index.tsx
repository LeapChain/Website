import React from 'react';

import {Button} from 'components';
import {URLS, ROUTES} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';
import {requestAccountNumber} from 'utils/keysign';
import * as api from 'apisV2/auth';
import {setLocalStorageItem} from 'utils/browser';

import * as S from './Styles';

const TopNavDesktopItems = () => {
  const onClickConnectWallet = () => {
    requestAccountNumber({
      accountNumber: '',
      onFailure: () => console.log('verify failure'), // TODO: handle accordingly
      onSuccess: async (userAccountNumber) => {
        const user = await api.createUser({accountNumber: userAccountNumber});
        setLocalStorageItem('accountNumber', JSON.stringify(user.accountNumber));
        console.log(user);
        // TODO: save user account number as cookie
      }, // TODO: ask the user to sign the nonce.
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
