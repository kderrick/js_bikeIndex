function Bike(brand, frameColor, city, state) {
  this.brand = brand;
  this.frameColor = frameColor;
  this.city = city;
  this.state = state;
}

// Bike.prototype.getBrand = function () {
//   return this.brand;
// }

exports.Bike = Bike;
