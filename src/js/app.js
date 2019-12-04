// build your app here

import '../styles/main.scss';
import { welcomeScreen } from './welcomeScreen';

export function app() {
window.addEventListener('resize', () => {
  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
}

welcomeScreen();