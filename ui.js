class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.precipitation = document.getElementById('w-precipitation');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    const stateAb = function (region) {
      let stateLoc = '';
      const states = {
        AL: 'Alabama',
        AK: 'Alaska',
        AZ: 'Arizona',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
        DE: 'Delaware',
        FL: 'Florida',
        GA: 'Georgia',
        HI: 'Hawaii',
        ID: 'Idaho',
        IL: 'Illinois',
        IN: 'Indiana',
        IA: 'Iowa',
        KS: 'Kansas',
        KY: 'Kentucky',
        LA: 'Louisiana',
        ME: 'Maine',
        MD: 'Maryland',
        MA: 'Massachusetts',
        MI: 'Michigan',
        MN: 'Minnesota',
        MS: 'Mississippi',
        MO: 'Missouri',
        MT: 'Montana',
        NE: 'Nebraska',
        NV: 'Nevada',
        NH: 'New Hampshire',
        NJ: 'New Jersey',
        NM: 'New Mexico',
        NY: 'New York',
        NC: 'North Carolina',
        ND: 'North  Dakota',
        OH: 'Ohio',
        OK: 'Oklahoma',
        OR: 'Oregon',
        PA: 'Pennsylvania',
        RI: 'Rhode Island',
        SC: 'South Carolina',
        SD: 'South Dakota',
        TN: 'Tennessee',
        TX: 'Texas',
        UT: 'Utah',
        VT: 'Vermont',
        VA: 'Virginia',
        WA: 'Washington',
        WV: 'West Virginia',
        WI: 'Wisconsin',
        WY: 'Wyoming',
      };
      for (let state in states) {
        if (states[state] === region) {
          stateLoc = state;
        }
      }
      return stateLoc;
    };
    const celcius = function (temperature) {
      return Math.round(((temperature - 32) * 5) / 9);
    };
    stateAb(weather.location.region);

    this.location.textContent = `${weather.location.name}, ${stateAb(
      weather.location.region
    )}`;
    this.desc.textContent = weather.current.weather_descriptions[0];
    this.string.textContent = `${weather.current.temperature}° F (${celcius(
      weather.current.temperature
    )}° C)`;
    this.icon.setAttribute('src', weather.current.weather_icons[0]);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
    this.precipitation.textContent = `Precipitation: ${weather.current.precip}%`;
    this.feelsLike.textContent = `Feels like: ${
      weather.current.feelslike
    }° F (${celcius(weather.current.feelslike)}° C)`;
    this.wind.textContent = `Wind blowing from: ${weather.current.wind_dir} at ${weather.current.wind_speed} MPH`;
  }
}
