export const isTouchScreenDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
