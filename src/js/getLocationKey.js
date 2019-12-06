import UI from './ui'
import axios from 'axios';
import { getCurrentWeather } from './getCurrentWeather';

const APIKEY = 'V3vgJgyoAhEnRJXjNooxSMmlScY792ne';
const textSearchURL = `https://dataservice.accuweather.com/locations/v1/cities/search`;


// Location Search based on User Input

export function searchLocation(key) {
  if(key === 13) { // 13 = enter
    getLocationKey(event.target.value);
  }
}

export async function getLocationKey(input) {
  try {
    // Obtain location key from AccuWeather API
    const location = await axios.get(`${textSearchURL}?q=${input}&apikey=${APIKEY}`)
      .then(res => res.data[0]);
    if(location) {
    // Display chosen location and current weather conditions
      UI.displayLocation(location.LocalizedName);
      getCurrentWeather(location.Key);
    
    } else {
      UI.displayLocation('Place not found');
    }
  } catch(err) {
    console.log(err);
  }
}