export const getPixelRatio = () => {
  if ('devicePixelRatio' in window) {
    if (window.devicePixelRatio > 1) {
      // set maximum 2 pixel ratio (for performance), but chart can work > 2
      return 2;
    }
  }
  return 1;
};

export const getXWithPixelRatio = (
  x: number,
  canvas: HTMLCanvasElement,
): number => {
  const dpr = getPixelRatio();
  if (dpr > 1) {
    return x + (1 - 1 / dpr) * canvas.height;
  }
  return x;
};

export const getWorkWidthWithPixelRatio = (
  canvas: HTMLCanvasElement,
): number => {
  const dpr = getPixelRatio();
  return canvas.width / dpr;
};

export const getWorkHeightWithPixelRatio = (
  canvas: HTMLCanvasElement,
): number => {
  const dpr = getPixelRatio();
  return canvas.height / dpr;
};
