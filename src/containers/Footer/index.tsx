import React, {FC, memo, useCallback} from 'react';

import {ROUTES, URLS} from 'constants/routes';
import colors from 'styles/colors';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls, socialMediaFooterIcons} from 'utils/social-media';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

import FooterNavList from './FooterNavList';
import * as S from './Styles';

interface ComponentProps {
  className?: string;
}

const navLists = [
  {
    header: 'Get LEAP',
    links: [
      ...(isFeatureEnabled(Feature.Bounties)
        ? [
            {
              title: 'Bounties',
              url: ROUTES.bounties,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Careers)
        ? [
            {
              title: 'Careers',
              url: ROUTES.openings,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Faucet)
        ? [
            {
              isExternal: true,
              newWindow: true,
              title: 'Faucet',
              url: URLS.apps.faucet,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Projects)
        ? [
            {
              isExternal: true,
              title: 'Create Projects',
              url: URLS.developerPortal.projects,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Apps)
        ? [
            {
              title: 'Apps',
              url: ROUTES.apps,
            },
          ]
        : []),
    ],
  },
  {
    header: 'Developer',
    links: [
      {
        isExternal: true,
        newWindow: false,
        title: 'Home',
        url: URLS.developerPortal.home,
      },
      ...(isFeatureEnabled(Feature.LivingWhitepaper)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'Living Whitepaper',
              url: URLS.developerPortal.whitepaper,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Tutorials)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'Tutorials',
              url: URLS.developerPortal.tutorials,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Projects)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'Projects',
              url: URLS.developerPortal.projects,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Apis)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'APIs',
              url: URLS.developerPortal.api,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.NodeDeployment)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'Node Deployment',
              url: URLS.developerPortal.nodeDeployment,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.SdksAndLibraries)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'SDKs &  Libraries',
              url: URLS.developerPortal.sdkAndLibraries,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Utilities)
        ? [
            {
              isExternal: true,
              newWindow: false,
              title: 'Utilities',
              url: URLS.developerPortal.utilities,
            },
          ]
        : []),
    ],
  },
  {
    header: 'Resources',
    links: [
      ...(isFeatureEnabled(Feature.Roadmap)
        ? [
            {
              title: 'Roadmap',
              url: ROUTES.roadmap,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Faq)
        ? [
            {
              title: 'FAQ',
              url: ROUTES.faq,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Blog)
        ? [
            {
              isExternal: true,
              newWindow: true,
              title: 'Blog',
              url: URLS.blog,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.MediaKit)
        ? [
            {
              title: 'Media Kit',
              url: ROUTES.assets,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.MeetTheTeam)
        ? [
            {
              title: 'Meet the Team',
              url: ROUTES.teams,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.AboutUs)
        ? [
            {
              title: 'About Us',
              url: ROUTES.aboutUs,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.JoinTheCommunity)
        ? [
            {
              title: 'Join the Community',
              url: ROUTES.social,
            },
          ]
        : []),
      ...(isFeatureEnabled(Feature.Donate)
        ? [
            {
              title: 'Donate',
              url: ROUTES.donate,
            },
          ]
        : []),
    ],
  },
  {
    header: 'Social',
    links: [
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            {/* material ui's discord icon is slightly different from the design, hence we will use the custom one */}
            <S.DiscordIcon color={colors.palette.neutral['400']} />
            {SocialMedia.discord}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.discord],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.github]} size={20} totalSize={20} />
            {SocialMedia.github}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.github],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.reddit]} size={20} totalSize={20} />
            {SocialMedia.reddit}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.reddit],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.twitter]} size={20} totalSize={20} />
            {SocialMedia.twitter}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.twitter],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.instagram]} size={20} totalSize={20} />
            {SocialMedia.instagram}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.instagram],
      },
    ],
  },
  {
    header: 'Legal',
    links: [
      {
        title: 'Community Guidelines',
        url: ROUTES.guidelines,
      },
      {
        title: 'Terms of Use',
        url: ROUTES.termsOfUse,
      },
      {
        title: 'Privacy Policy',
        url: ROUTES.privacyPolicy,
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const renderNavLists = useCallback(
    () => navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />),
    [],
  );

  return (
    <S.Container className={className} data-testid="Footer">
      {renderNavLists()}
    </S.Container>
  );
};

export default memo(Footer);
