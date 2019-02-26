const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  console.log(planetsDataModel.planets);

  const selectView = new SelectView();
  selectView.bindEvents()


const infoDiv = document.querySelector('.planet-details');
  const planetInfoView = new PlanetInfoView(infoDiv);
  planetInfoView.bindEvents();

  // planetsDataModel.bindEvents();

});
