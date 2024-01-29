class Plant {
  constructor(height, age) {
    this.height = height; // this === object(тот который мы через класс создаем)
    this.age = age;
  }

  grow() {
    this.height += 10; // this.height = this.height + 10
  }
}

class Rose extends Plant {
  constructor(height, age, numberOfFlowers) {
    super(height, age);
    this.numberOfFlowers = numberOfFlowers;
  }
}

const flower = new Plant(200, 6);
console.log(flower);
flower.grow();
console.log(flower);
flower.grow();
console.log(flower);

const rose = new Rose(130, 3, 20);
console.log(rose);
rose.grow();
console.log(rose);

