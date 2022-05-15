import React, {FC} from 'react';

import {PageTitle} from 'components';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';
import HomeHero from './HomeHero';
import HomeSpeed from './HomeSpeed';
import DownloadWallet from './DownloadWallet';
import Links from './Links';
import LearnToDevelop from './LearnToDevelop';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    {isFeatureEnabled(Feature.Tutorials) && <LearnToDevelop />}
    <HomeSpeed />
    {isFeatureEnabled(Feature.DownloadWallet) && <DownloadWallet />}
    <Links />
  </>
);

export default Home;
