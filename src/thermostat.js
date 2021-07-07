'use strict';

class Thermostat {
  constructor() {
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.DEFAULT_TEMP = 20;
    this.MED_TEMP_LIMIT = 25;
    this.LOW_TEMP_LIMIT = 18;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this._isMaxTemp()) {
      return;
    }
    else {
      this.temperature++;
    }
  }

  down() {
    if (this._isMinTemp()) {
      return;
    }
    else {
      this.temperature--;
    }
  }
  
  _isMinTemp() {
    return this.temperature === this.MIN_TEMP;
  }

  _isMaxTemp() {
    if (this.isPowerSavingMode()) {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    }
    else {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
  }

  isPowerSavingMode() {
    return this.powerSavingMode;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.getCurrentTemperature() < this.LOW_TEMP_LIMIT) {
      return "low-usage";
    }
    else if (this.getCurrentTemperature() < this.MED_TEMP_LIMIT) {
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }
};