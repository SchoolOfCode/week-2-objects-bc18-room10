console.log("Hello world!")

let member1 = {     
    name: "Holly",
    age: "44",
    height: "5,6",
    "eye color": "hazel",
    favouriteFood: "strawberries"
  };

let member2 = {     
    name: "Jacob",
    age: "25",
    height: "6,1",
    "eye color": "Green",
    favouriteFood: "Chicken"
  };

let member3 = {     
    name: "Shanti",
    age: "33",
    height: "5,3",
    "eye color": "dark brown",
    favouriteFood: "pizza"
  };

  console.log(member1.age, member2.age, member3.age);
  console.log(member1["eye color"], member2["eye color"], member3["eye color"]);
  member2.age = 26;
  console.log(member2.age);

  let ourTeam = {
    member1: {
      nickname: "Holl",
      superpower: "Healing",
      methodOfTransport: "Feet",
      favouriteAnimal: "Rolf the cat",
    },
    member2: {
      nickname: "Jake",
      superpower: "Flying",
      methodOfTransport: "Car",
      favouriteAnimal: "Capybara",
    },
    member3: {
      nickname: "Shant",
      superpower: "Super speed",
      methodOfTransport: "E-scooter",
      favouriteAnimal: "Horse",
    }
  }

  console.log(ourTeam.member1.favouriteAnimal, ourTeam.member2.favouriteAnimal, ourTeam.member3.favouriteAnimal);

  module.exports = { member1, member2, member3 };
  module.exports = { ourTeam};