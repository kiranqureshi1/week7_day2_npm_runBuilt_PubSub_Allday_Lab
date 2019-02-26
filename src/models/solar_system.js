const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('Select planet', (event) => {
    const selectedPlanet = event.detail;
    console.log(selectedPlanet);
    const result = this.planetInfo(selectedPlanet)
    console.log(result);
    PubSub.publish('display result', result);
  });
};

SolarSystem.prototype.planetInfo = function(planetName){
  for ( let planet of this.planets){
    if (planet.name === planetName){
  };

  return planet;
};
};
















module.exports = SolarSystem;
