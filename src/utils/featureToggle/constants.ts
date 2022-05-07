export enum Feature {
  Bounties = 'Bounties',
  Careers = 'Careers',
  Faucet = 'Faucet',
  Projects = 'Projects',
  Apps = 'Apps',

  LivingWhitepaper = 'LivingWhitepaper',
  Tutorials = 'Tutorials',
  Apis = 'Apis',
  NodeDeployment = 'NodeDeployment',
  SdksAndLibraries = 'SdksAndLibraries',
  Utilities = 'Utilities',
  Resources = 'Resources',

  Roadmap = 'Roadmap',
  Faq = 'Faq',
  Blog = 'Blog',
  MediaKit = 'MediaKit',
  MeetTheTeam = 'MeetTheTeam',
  AboutUs = 'AboutUs',
  JoinTheCommunity = 'JoinTheCommunity',
  Donate = 'Donate',

  CreateAccount = 'CreateAccount',
  Login = 'Login',
  Profile = 'Profile',

  DownloadWallet = 'DownloadWallet',
  WalletDocs = 'WalletDocs',
}

export const FEATURE_TOGGLES: Partial<Record<Feature, boolean>> = {
  // Get LEAP Section
  [Feature.Bounties]: true,
  [Feature.Careers]: false,
  [Feature.Faucet]: false,
  [Feature.Projects]: false,
  [Feature.Apps]: false,

  // Developers Section
  [Feature.LivingWhitepaper]: true,
  [Feature.Tutorials]: false,
  [Feature.Apis]: false,
  [Feature.NodeDeployment]: false,
  [Feature.SdksAndLibraries]: false,
  [Feature.Utilities]: false,
  [Feature.Resources]: false,

  // Resources Section
  [Feature.Roadmap]: true,
  [Feature.Faq]: false,
  [Feature.Blog]: false,
  [Feature.MediaKit]: false,
  [Feature.MeetTheTeam]: false,
  [Feature.JoinTheCommunity]: false,
  [Feature.Donate]: false,
  [Feature.AboutUs]: true,

  // Auth Related
  [Feature.CreateAccount]: false,
  [Feature.Login]: false,
  [Feature.Profile]: false,

  [Feature.DownloadWallet]: true,
  [Feature.WalletDocs]: true,
};
