let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
    image:
      "https://www.google.com/imgres?q=aqua%20toyota&imgurl=https%3A%2F%2Fwww.autoblog.com%2F.image%2Fw_3840%2Cq_auto%3Agood%2Cc_fill%2Car_4%3A3%2FMjA5MTc4MTU4MDk1OTM1MDg4%2Fimage-placeholder-title.jpg&imgrefurl=https%3A%2F%2Fwww.autoblog.com%2Fnews%2Ftoyota-aqua-prius-c-comes-to-japan-60-000-orders-already-in&docid=O-i7pwRWYbvkoM&tbnid=c1X_Gvr6UU0m-M&vet=12ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA..i&w=3840&h=2880&hcb=2&ved=2ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA",
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
    image:
      "https://www.google.com/imgres?q=aqua%20toyota&imgurl=https%3A%2F%2Fwww.autoblog.com%2F.image%2Fw_3840%2Cq_auto%3Agood%2Cc_fill%2Car_4%3A3%2FMjA5MTc4MTU4MDk1OTM1MDg4%2Fimage-placeholder-title.jpg&imgrefurl=https%3A%2F%2Fwww.autoblog.com%2Fnews%2Ftoyota-aqua-prius-c-comes-to-japan-60-000-orders-already-in&docid=O-i7pwRWYbvkoM&tbnid=c1X_Gvr6UU0m-M&vet=12ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA..i&w=3840&h=2880&hcb=2&ved=2ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA",
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
    image:
      "https://www.google.com/imgres?q=aqua%20toyota&imgurl=https%3A%2F%2Fwww.autoblog.com%2F.image%2Fw_3840%2Cq_auto%3Agood%2Cc_fill%2Car_4%3A3%2FMjA5MTc4MTU4MDk1OTM1MDg4%2Fimage-placeholder-title.jpg&imgrefurl=https%3A%2F%2Fwww.autoblog.com%2Fnews%2Ftoyota-aqua-prius-c-comes-to-japan-60-000-orders-already-in&docid=O-i7pwRWYbvkoM&tbnid=c1X_Gvr6UU0m-M&vet=12ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA..i&w=3840&h=2880&hcb=2&ved=2ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA",
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
    image:
      "https://www.google.com/imgres?q=aqua%20toyota&imgurl=https%3A%2F%2Fwww.autoblog.com%2F.image%2Fw_3840%2Cq_auto%3Agood%2Cc_fill%2Car_4%3A3%2FMjA5MTc4MTU4MDk1OTM1MDg4%2Fimage-placeholder-title.jpg&imgrefurl=https%3A%2F%2Fwww.autoblog.com%2Fnews%2Ftoyota-aqua-prius-c-comes-to-japan-60-000-orders-already-in&docid=O-i7pwRWYbvkoM&tbnid=c1X_Gvr6UU0m-M&vet=12ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA..i&w=3840&h=2880&hcb=2&ved=2ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA",
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
    image:
      "https://www.google.com/imgres?q=aqua%20toyota&imgurl=https%3A%2F%2Fwww.autoblog.com%2F.image%2Fw_3840%2Cq_auto%3Agood%2Cc_fill%2Car_4%3A3%2FMjA5MTc4MTU4MDk1OTM1MDg4%2Fimage-placeholder-title.jpg&imgrefurl=https%3A%2F%2Fwww.autoblog.com%2Fnews%2Ftoyota-aqua-prius-c-comes-to-japan-60-000-orders-already-in&docid=O-i7pwRWYbvkoM&tbnid=c1X_Gvr6UU0m-M&vet=12ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA..i&w=3840&h=2880&hcb=2&ved=2ahUKEwjn3tzlnOaOAxXqiq8BHVZWAIQQM3oECBoQAA",
  },
];

const carListDiv = document.getElementById("car-list");

// let carNamePtags = "";

cars.map((car) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.className = "card";
  p.className = "carName";
  p.innerText = car.model + car.color;
  div.appendChild(p);

  carListDiv.appendChild(div);
});
// console.log(carNamePtags);
// carListDiv.innerHTML = carNamePtags;
