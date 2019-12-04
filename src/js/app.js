// build your app here

import { welcomeScreen } from './welcomeScreen';

export function app() {
welcomeScreen();
  
window.addEventListener('resize', () => {
  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
}


