import {SocialMedia} from 'types/social-media';
import {IconType} from '@leapchain/ui';

export const socialMediaUrls = {
  [SocialMedia.discord]: 'https://discord.gg/WnDvJSGaTA',
  [SocialMedia.facebook]: 'https://www.facebook.com/LeapChain/',
  [SocialMedia.gaming]: 'https://discord.gg/PZu7MSBsn8',
  [SocialMedia.github]: 'https://github.com/LeapChain',
  [SocialMedia.instagram]: 'https://www.instagram.com/LeapChain/',
  [SocialMedia.linkedin]: 'https://www.linkedin.com/company/LeapChain/',
  [SocialMedia.pinterest]: 'https://www.pinterest.com/LeapChain/',
  [SocialMedia.reddit]: 'https://www.reddit.com/r/LeapChain/',
  [SocialMedia.twitch]: 'https://twitch.tv/leapchain/profile',
  [SocialMedia.twitter]: 'https://twitter.com/LeapChain',
  [SocialMedia.youtube]: 'https://www.youtube.com/user/leapchain',
};

export const socialMediaHandles = {
  [SocialMedia.discord]: 'discord',
  [SocialMedia.facebook]: 'LeapChain',
  [SocialMedia.github]: 'LeapChain',
  [SocialMedia.gaming]: 'gaming',
  [SocialMedia.instagram]: '@LeapChain',
  [SocialMedia.linkedin]: 'LeapChain',
  [SocialMedia.pinterest]: 'LeapChain',
  [SocialMedia.reddit]: 'r/LeapChain',
  [SocialMedia.twitch]: 'LeapChain',
  [SocialMedia.twitter]: '@LeapChain',
  [SocialMedia.youtube]: 'LeapChain',
};

export const socialMediaFooterIcons = {
  [SocialMedia.discord]: IconType.discord,
  [SocialMedia.facebook]: IconType.facebook,
  [SocialMedia.github]: IconType.github,
  [SocialMedia.gaming]: IconType.googleController,
  [SocialMedia.instagram]: IconType.instagram,
  [SocialMedia.linkedin]: IconType.linkedin,
  [SocialMedia.pinterest]: IconType.pinterest,
  [SocialMedia.reddit]: IconType.reddit,
  [SocialMedia.twitch]: IconType.twitch,
  [SocialMedia.twitter]: IconType.twitter,
  [SocialMedia.youtube]: IconType.youtube,
};

export const socialMediaDescriptions = {
  [SocialMedia.discord]: 'Join our discord community to make new friends and interact with one another.',
  [SocialMedia.facebook]: 'Stay up to date by following us on our Facebook page.',
  [SocialMedia.gaming]: 'Join our gaming discord community to earn coins from gaming tournaments, playoffs and more!',
  [SocialMedia.github]:
    'You can find the official repositories for our projects on our GitHub and start contributing today.',
  [SocialMedia.instagram]: 'Stay up to date by following us on our Instagram.',
  [SocialMedia.linkedin]: 'Follow us on LinkedIn and expand your network.',
  [SocialMedia.pinterest]: 'Follow us on Pinterest for crypto related news and information.',
  [SocialMedia.reddit]:
    'Our Reddit community is built to help others learn about computer science and other academic subjects.',
  [SocialMedia.twitch]: 'Follow us on twitch for regular livestreams.',
  [SocialMedia.twitter]: 'Stay up to date by following us on Twitter.',
  [SocialMedia.youtube]:
    'Follow us on YouTube and find tons of sweet computer related tutorials and some other awesome videos too!',
};
