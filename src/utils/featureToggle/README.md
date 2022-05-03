# Feature Toggle

This package contains the feature toggles to enable/disable a particular feature.

## Usage

To add a new feature toggle, and a new enum value to `FeatureToggle` and update the `FEATURE_TOGGLES` constant with the toggle value.

For the checking if toggle is on or off, can utilise the `isFeatureEnabled` utility in the following manner:

```ts
const isRoadmapEnabled = isFeatureEnabled(Feature.Roadmap);
```
