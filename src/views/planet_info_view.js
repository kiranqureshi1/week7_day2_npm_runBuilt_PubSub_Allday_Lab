const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('display result', (event) => {
    const selectedPlanet = event.detail;
    console.log(selectedPlanet);
    this.display(selectedPlanet);
  });
};



PlanetInfoView.prototype.display = function(planet){
  // const infoParagraph = document.createElement('li');
  // infoParagraph.textContent = `name: ${planet.name}, orbit: ${planet.orbit}`
  // this.container.innerHTML = '';
  // this.container.appendChild(infoParagraph);
  // console.log(this.container);


  const infoHeading = document.createElement('h1');
  infoHeading.textContent = `${planet.name}`;
 const infoLiA = document.createElement('p');
 infoLiA.textContent = `orbit: ${planet.orbit}`;
 const infoLiB = document.createElement('p');
 infoLiB.textContent = `day: ${planet.day}`;
 const infoLiC = document.createElement('p');
 infoLiC.textContent = `surface area: ${planet.surfaceArea}`;
 const infoLiD = document.createElement('p');
 infoLiD.textContent = `volume: ${planet.volume}`;
 const infoLiE = document.createElement('p');
 infoLiE.textContent = `Gravity: ${planet.gravity}`;
 const infoLiF = document.createElement('p');
 infoLiF.textContent = `Moons: ${planet.moons}`;
 // const infoLiG = document.createElement('p');
 // infoHeading.textContent = `${planet.image}`;
 this.container.innerHTML = '';
 this.container.appendChild(infoHeading);
 this.container.appendChild(infoLiA);
 this.container.appendChild(infoLiB);
 this.container.appendChild(infoLiC);
 this.container.appendChild(infoLiD);
 this.container.appendChild(infoLiE);
 this.container.appendChild(infoLiF);
 // this.container.appendChild(infoLiG);

};


module.exports = PlanetInfoView;
// name: 'Mercury',
// orbit: 87.969,
// day: 58.646,
// surfaceArea: 0.147,
// volume: 0.056,
// gravity: 0.38,
// moons: 0,
// image: 'images/mercury.jpg'
