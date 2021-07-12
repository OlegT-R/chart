import App from './components/app';
import { initApp } from './models/initApp';

import { IBaseComponent } from './types/component';

const Main = (): IBaseComponent => {
  const initAppPromise = initApp();
  const main = document.createElement('div');
  main.id = 'main_app';
  const app = App(initAppPromise);
  main.appendChild(app.html);
  return {
    html: main,
    style: app.style,
  };
};

const mainObj = Main();

document.body.appendChild(mainObj.html);
mainObj.style.forEach(style => document.head.appendChild(style));
