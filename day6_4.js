//write a class to calculate the uber price.

class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *30;
    }
  }
  
  var uber = new Uber_Price(10);
  console.log(uber.getPrice());