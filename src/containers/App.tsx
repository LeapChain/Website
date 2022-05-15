import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import {ROUTES} from 'constants/routes';
import withSuspense from 'hoc/withSuspense';

import AboutUs from './AboutUs';
import Assets from './Assets';
import Bounties from './Bounties';
import CreateAccount from './CreateAccount';
import Donate from './Donate';
import Download from './Download';
import Faq, {faqFilters, FaqFilterType} from './Faq';
import Guidelines from './Guidelines';
import Home from './Home';
import Openings from './Openings';
import PrivacyPolicy from './PrivacyPolicy';
import Profile from './Profile';
import Roadmap from './Roadmap';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Social from './Social';
import Teams from './Teams';
import TermsOfUse from './TermsOfUse';
import Wallet from './Wallet';

import {isFeatureEnabled, Feature} from '../utils/featureToggle';

/**
 * Lazy load pages that may contribute a lot to the bundle sizes
 */
const Apps = lazy(() => import('./Apps'));
const Polls = lazy(() => import('./Polls'));
const WalletProgress = lazy(() => import('./WalletProgress'));

interface GoogleAnalyticsWindow extends Window {
  ga: any;
  gtag: any;
}

declare const window: GoogleAnalyticsWindow;

const App: FC = () => {
  const renderGoogleAnalytics = () => {
    if (process.env.NODE_ENV === 'development') return null;
    return (
      <Route
        path="/"
        render={({location}) => {
          if (typeof window.ga === 'function') {
            window.gtag('config', 'UA-56989641-1', {
              page_location: window.location.href,
              page_path: location.pathname,
              page_title: document.title,
            });
          }
          return null;
        }}
      />
    );
  };

  return (
    <Router>
      {renderGoogleAnalytics()}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {isFeatureEnabled(Feature.AboutUs) && <Route exact path={ROUTES.aboutUs} component={AboutUs} />}
          {isFeatureEnabled(Feature.Apps) && (
            <Route exact path={`${ROUTES.apps}/:slug?`} component={withSuspense(Apps)} />
          )}
          <Route exact path={ROUTES.guidelines} component={Guidelines} />
          {isFeatureEnabled(Feature.CreateAccount) && (
            <Route exact path={ROUTES.createAccount} render={() => <CreateAccount disabled />} />
          )}
          {isFeatureEnabled(Feature.Donate) && <Route exact path={ROUTES.donate} component={Donate} />}
          {isFeatureEnabled(Feature.Faq) && (
            <Redirect exact from={ROUTES.faq} to={`${ROUTES.faq}/${faqFilters[FaqFilterType.all]}`} />
          )}
          {isFeatureEnabled(Feature.Faq) && <Route exact path={`${ROUTES.faq}/:filter`} component={Faq} />}
          {isFeatureEnabled(Feature.MediaKit) && <Route exact path={ROUTES.assets} component={Assets} />}
          {isFeatureEnabled(Feature.Careers) && <Redirect exact from={ROUTES.openings} to={`${ROUTES.openings}/All`} />}
          {isFeatureEnabled(Feature.Careers) && (
            <Route exact path={`${ROUTES.openings}/:category/:openingId?`} render={() => <Openings />} />
          )}
          {isFeatureEnabled(Feature.JoinTheCommunity) && <Route exact path={ROUTES.social} component={Social} />}
          {isFeatureEnabled(Feature.Bounties) && (
            <Redirect exact from={ROUTES.bounties} to={`${ROUTES.bounties}/All`} />
          )}
          {isFeatureEnabled(Feature.Bounties) && (
            <Route exact path={`${ROUTES.bounties}/:repository`} component={Bounties} />
          )}
          {isFeatureEnabled(Feature.MeetTheTeam) && (
            <Redirect exact path={ROUTES.teams} to={`${ROUTES.teams}/All/Members`} />
          )}
          {isFeatureEnabled(Feature.MeetTheTeam) && (
            <Route exact path={`${ROUTES.teams}/:team/:tab?/:resource?`} component={Teams} />
          )}
          {isFeatureEnabled(Feature.DownloadWallet) && <Route path={ROUTES.download} component={Download} />}
          {isFeatureEnabled(Feature.Roadmap) && <Route path={ROUTES.roadmap} component={Roadmap} />}
          {isFeatureEnabled(Feature.WalletDocs) && <Route path={`${ROUTES.wallet}/:chapter?`} component={Wallet} />}
          <Route path={ROUTES.privacyPolicy} component={PrivacyPolicy} />
          {isFeatureEnabled(Feature.Login) && <Route exact path={ROUTES.signin} component={SignIn} />}
          {isFeatureEnabled(Feature.Login) && <Route exact path={ROUTES.signout} component={SignOut} />}
          {isFeatureEnabled(Feature.Polls) && (
            <Route path={`${ROUTES.polls}/:pollId?`} component={withSuspense(Polls)} />
          )}
          <Route exact path={ROUTES.termsOfUse} component={TermsOfUse} />
          {isFeatureEnabled(Feature.Profile) && <Route path={`${ROUTES.users}/:userId`} component={Profile} />}
          <Route path={ROUTES.walletProgress} component={withSuspense(WalletProgress)} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
