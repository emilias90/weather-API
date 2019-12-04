const welcomeScreen = document.getElementById('welcomeScreen');
const weatherDisplay = document.getElementById('weatherDisplay');
const detailsScreen = document.getElementById('detailsScreen');
const weatherDetails = document.getElementById('weatherDetails');
const locationDisplay = document.getElementById('locationDisplay');




class UI {

    static displayLocation(location) {
        locationDisplay.innerHTML = `<p>Weather in: ${location}</p>`
      }

    static displayWeather(weather) {
      const icon = weather.WeatherIcon < 10 ? `0${weather.WeatherIcon}`: weather.WeatherIcon;
      weatherDisplay.innerHTML =
      `is currently ${weather.WeatherText}</p> <br> <img src="https://developer.accuweather.com/sites/default/files/${icon}-s.png">
      <p>${weather.ApparentTemperature.Metric.Value} °C<br>`;
    }
  
    static hideWelcomeScreen(){
      welcomeScreen.style.display = 'none';
    }
  
    static showWelcomeScreen(){
      this.hideDetailsScreen()
      welcomeScreen.style.display = 'flex';
    }
  
    static hideDetailsScreen(){
      detailsScreen.style.display = 'none';
    }
  
    static displayDetails(weather) {
      this.hideWelcomeScreen();
      detailsScreen.style.display = 'inline'
      document.getElementById('detailsScreen').style.visibility = "visible"
    
      weatherDetails.innerHTML = `
        <div>
          <h5>Temperature</h5>
          <p>actual: ${weather.Temperature.Metric.Value}°C
          <br>apparent: ${weather.ApparentTemperature.Metric.Value}°C</p>
        </div> <hr>
        <div>
          <h5>RealFeel Temperature</h5>
          <p>${weather.RealFeelTemperature.Metric.Value}°C</p>
        </div> <hr>
        <div>
          <h5>Precipitation</h5>
          <p>${weather.PrecipitationType || ''} ${weather.Precip1hr.Metric.Value}mm</p>
        </div> <hr>
        <div>
          <h5>Wind</h5>
          <p>direction: ${weather.Wind.Direction.English}
          <br>speed: ${weather.Wind.Speed.Metric.Value}km/h </p>
        </div> <hr>
        <div>
          <h5>Pressure</h5>
          <p>${weather.Pressure.Metric.Value}mb ${weather.PressureTendency.LocalizedText}</p>
        </div> <hr>
        `;
    }
  
    

  }
  
  export default UI;
  