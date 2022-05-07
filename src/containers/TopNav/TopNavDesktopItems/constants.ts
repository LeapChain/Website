import {ROUTES, URLS} from 'constants/routes';
import {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

export const developerPopoverItems: TopNavPopoverItemType[] = [
  {
    isExternal: true,
    newWindow: false,
    title: 'Home',
    to: URLS.developerPortal.home,
  },
  ...(isFeatureEnabled(Feature.LivingWhitepaper)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Living Whitepaper',
          to: URLS.developerPortal.whitepaper,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Tutorials)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Tutorials',
          to: URLS.developerPortal.tutorials,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Projects)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Projects',
          to: URLS.developerPortal.projects,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Apis)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'APIs',
          to: URLS.developerPortal.api,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.NodeDeployment)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Node Deployment',
          to: URLS.developerPortal.nodeDeployment,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.SdksAndLibraries)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'SDKs &  Libraries',
          to: URLS.developerPortal.sdkAndLibraries,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Utilities)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Utilities',
          to: URLS.developerPortal.utilities,
        },
      ]
    : []),
];

export const getLEAPPopoverItems: TopNavPopoverItemType[] = [
  ...(isFeatureEnabled(Feature.Bounties)
    ? [
        {
          title: 'Bounties',
          to: ROUTES.bounties,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Careers)
    ? [
        {
          title: 'Careers',
          to: ROUTES.openings,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Faucet)
    ? [
        {
          isExternal: true,
          newWindow: true,
          title: 'Faucet',
          to: URLS.apps.faucet,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Projects)
    ? [
        {
          isExternal: true,
          newWindow: false,
          title: 'Create Projects',
          to: URLS.developerPortal.projects,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Apps)
    ? [
        {
          title: 'Apps',
          to: ROUTES.apps,
        },
      ]
    : []),
];

export const resourcesPopoverItems: TopNavPopoverItemType[] = [
  ...(isFeatureEnabled(Feature.Roadmap)
    ? [
        {
          title: 'Roadmap',
          to: ROUTES.roadmap,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Faq)
    ? [
        {
          title: 'FAQ',
          to: ROUTES.faq,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.Blog)
    ? [
        {
          isExternal: true,
          newWindow: true,
          title: 'Blog',
          to: URLS.blog,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.MediaKit)
    ? [
        {
          title: 'Media Kit',
          to: ROUTES.assets,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.MeetTheTeam)
    ? [
        {
          title: 'Meet the Team',
          to: ROUTES.teams,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.AboutUs)
    ? [
        {
          title: 'About Us',
          to: ROUTES.aboutUs,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.JoinTheCommunity)
    ? [
        {
          title: 'Join the Community',
          to: ROUTES.social,
        },
      ]
    : []),
  ...(isFeatureEnabled(Feature.JoinTheCommunity)
    ? [
        {
          title: 'Donate',
          to: ROUTES.donate,
        },
      ]
    : []),
];
