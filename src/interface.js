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
})

