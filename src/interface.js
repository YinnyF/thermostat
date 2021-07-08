document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();

  const updateTemp = () => {
    document.querySelector('#temperature').innerText = thermostat.getCurrentTemperature();
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }

  updateTemp();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemp();
  })

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemp();
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemp();
  })

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemp();
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemp();
  })

  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6865cb5acba8f25f651d919c1b524a65&units=metric')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#current-temperature').innerText = data.main.temp;
  });

  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  }

  displayWeather('London');

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
  
    displayWeather(city);
  })

})