// Constants
import {Feature, FEATURE_TOGGLES} from './constants';

// We allow an optional featureToggles in case in the future there maybe multiple feature toggle configs
export const isFeatureEnabled = (feature: Feature, featureToggles = FEATURE_TOGGLES) => {
  return typeof featureToggles[feature] !== 'undefined' ? featureToggles[feature] : false; // we will default to false if feature does not exist
};

export {Feature};
