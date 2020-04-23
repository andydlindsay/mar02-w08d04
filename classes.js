class Square {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
};

const square = new Square(2, 5);
console.log(square);
console.log(square.area());
