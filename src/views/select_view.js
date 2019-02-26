const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};


SelectView.prototype.bindEvents = function() {
  const navElements = document.querySelector('nav');
  console.log(navElements);
  navElements.addEventListener('click', (event) => {
    event.preventDefault();
    const planet = event.target.id;
    console.log(planet);
    PubSub.publish('Select planet', planet);
  });

}
module.exports = SelectView;
