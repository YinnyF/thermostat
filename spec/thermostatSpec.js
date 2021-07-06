'use strict';

describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = New Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
