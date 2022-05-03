import React from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES, URLS} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

import WalletImage from 'assets/images/wallet.png';

import * as S from './Styles';

const DownloadWallet = () => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageContainer>
          <S.Image alt="Wallet" src={WalletImage} />
        </S.ImageContainer>
        <S.Content>
          <S.Heading>Get TNB Coins</S.Heading>
          <S.Paragraph>Download our desktop wallet to send and receive coins.</S.Paragraph>
          {isFeatureEnabled(Feature.Faucet) && <S.A href={URLS.tnbFaucet}>Get 50 free coins from the Faucet.</S.A>}
          <S.Button variant="outlined" onClick={() => history.push(ROUTES.download)}>
            Download Wallet
          </S.Button>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default DownloadWallet;
