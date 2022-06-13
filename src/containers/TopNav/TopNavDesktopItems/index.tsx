import React, {useEffect, useState} from 'react';

import {Button} from 'components';
import {URLS, ROUTES} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';
import {requestAccountNumber} from 'utils/keysign';
import * as api from 'apisV2/auth';
import {setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem} from 'utils/browser';

import * as S from './Styles';

const TopNavDesktopItems = () => {
  const [isWalletConnected, setisWalletConnected] = useState(false);
  const onClickConnectWallet = () => {
    requestAccountNumber({
      accountNumber: '',
      onFailure: () => console.log('verify failure'), // TODO: handle accordingly
      onSuccess: async (userAccountNumber) => {
        const user = await api.createUser({accountNumber: userAccountNumber});
        setLocalStorageItem('__user_id', JSON.stringify(user.accountNumber));
        setisWalletConnected(true);
        console.log(user);
      }, // TODO: handle failure scenerio;
    });
  };

  const onClickLogout = () => {
    removeLocalStorageItem('__user_id');
    setisWalletConnected(false);
  };

  useEffect(() => {
    setisWalletConnected(getLocalStorageItem('__user_id', false));
  }, [isWalletConnected]);

  return (
    <S.Container>
      {isFeatureEnabled(Feature.Polls) && <S.InternalLink to={ROUTES.polls}>Polls</S.InternalLink>}
      <S.ExternalLink href={URLS.discord}>Discord</S.ExternalLink>
      {isWalletConnected && isFeatureEnabled(Feature.ConnectWallet) ? (
        <>
          <S.Separator />
          <S.RightSection>
            <Button onClick={onClickLogout}>Logout</Button>
          </S.RightSection>
        </>
      ) : (
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
