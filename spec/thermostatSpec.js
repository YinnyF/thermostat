'use strict';

describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can be increased by 1 with up()", () => {
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("can be decreased by 1 with down()", () => {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum of 10 degrees", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has Power Saving Mode set to be on", () => {
    expect(thermostat.isPowerSavingMode()).toBe(true);
  });

  it("can turn off Power Saving Mode", () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingMode()).toBe(false);
  });

  it("can turn on Power Saving Mode", () => {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingMode()).toBe(true);
  });

  it("can be reset to default temp", () => {
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe("When PSM on", () => {
    it("has max temp of 25", () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("When PSM off", () => {
    beforeEach(function() {
      thermostat.switchPowerSavingModeOff();
    });

    it("has max temp of 32", () => {
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("displaying usage levels", () => {
    describe("when temp is lower than 18", () => {
      it("has low energy usage", () => {
        for (let i = 0; i < 3; i++) {
          thermostat.down()
        }
        expect(thermostat.energyUsage()).toEqual("low-usage");
      });
    });

    describe("when temp is between 18 and 25 inclusive", () => {
      it("has medium energy usage", () => {
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });
    });

    describe("when temp is greater than 25", () => {
      it("has high energy usage", () => {
        for (let i = 0; i < 6; i++) {
          thermostat.up()
        }
        expect(thermostat.energyUsage()).toEqual("high-usage");
      });
    });

  });
});
