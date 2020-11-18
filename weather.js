class Weather {
  constructor(city) {
    (this.apiKey = '9121c95db1494f124eee37e81e2fcb51'), (this.city = city);
  }

  //fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //change weather location
  changeLocation(city) {
    this.city = city;
  }
}
