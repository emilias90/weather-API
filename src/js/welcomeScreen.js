import { searchLocation , getLocationKey} from './getLocationKey';

export function welcomeScreen() {
  document.getElementById('detailsScreen').style.visibility = "hidden";

  document.querySelector('#searchInput').addEventListener('keyup', event => {
    searchLocation(event.which);
  });
  document.querySelector('#searchInput').addEventListener('change', event => {
    getLocationKey(event.target.value);
  });
}