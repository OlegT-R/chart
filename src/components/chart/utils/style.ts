export const createStyle = (css: string): HTMLStyleElement => {
  const styleEl: HTMLStyleElement = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(css));
  return styleEl;
};
