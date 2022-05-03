import {EMAIL} from './contact';

// Internal URLs
export const ROUTES = {
  aboutUs: '/about-us',
  analytics: '/analytics',
  apps: '/apps',
  assets: '/assets',
  bounties: '/bounties',
  createAccount: '/create-account',
  deploymentGuide: '/deployment-guide',
  donate: '/donate',
  download: '/download',
  faq: '/faq',
  guidelines: '/guidelines',
  openings: '/openings',
  privacyPolicy: '/privacy-policy',
  roadmap: '/roadmap',
  signin: 'sign-in',
  signout: '/sign-out',
  social: '/social',
  styleGuide: '/style-guide',
  teams: '/teams',
  termsOfUse: '/terms-of-use',
  users: '/users',
  wallet: '/wallet',
  walletProgress: '/wallet-progress',
};

// External URLs
const developerPortalUrl = 'https://developer.thenewboston.com'; // TODO: update when ready

export const URLS = {
  apps: {
    faucet: 'https://tnbfaucet.com/', // TODO: update when ready
  },
  blog: 'https://blog.thenewboston.com', // TODO: update when ready
  contact: `mailto:${EMAIL}`,
  developerPortal: {
    api: `${developerPortalUrl}/api`,
    home: developerPortalUrl,
    nodeDeployment: `${developerPortalUrl}/node-deployment`,
    projects: `${developerPortalUrl}/projects`,
    sdkAndLibraries: `${developerPortalUrl}/sdks-and-libraries`,
    tutorials: `${developerPortalUrl}/tutorials`,
    utilities: `${developerPortalUrl}/utilities`,
    whitepaper: `${developerPortalUrl}/whitepaper`,
  },
  discord: 'https://discord.gg/WnDvJSGaTA',
  github: 'https://github.com/LeapChain',
  tnbFaucet: 'https://tnbfaucet.com',
};
