class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    const area = 3.142 * this.radius ** 2;
    return area;
  }
}

class Square extends Shape {
  constructor(name, length, breadth) {
    super(name);
    this.length = length;
    this.breadth = breadth;
  }

  getArea() {
    const area = this.length * this.breadth;
    return area;
  }
}

const shape1 = new Circle("circle", 3);
const shape2 = new Square("Square", 3, 10);

console.log(shape1.getArea());
console.log(shape2.getArea());
