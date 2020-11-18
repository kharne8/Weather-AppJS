//Initalize classes
const storage = new Storage();
// defalult loc
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  //get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
