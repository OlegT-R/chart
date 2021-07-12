export interface IBaseComponent <P = Record<string, any>>{
  html: HTMLElement;
  style: HTMLStyleElement[];
  event?: string[];
  update?: (props: Partial<P>) => void
}
