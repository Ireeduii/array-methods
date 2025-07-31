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
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return filtered;
}
console.log("dasgal-1", getAvailableCars(cars));

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let filtered = cars.filter((car) => {
    return car.year > 2018;
  });
  return filtered;
}
console.log("dasgal-2", getRecentCars(cars));

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filtered = cars.filter((car) => {
    return car.price > 50000000;
  });
  return filtered;
}
console.log("dasgal-3", getExpensiveCars(cars));

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let filtered = cars.filter((car) => {
    return car.type === "Sedan";
  });
  return filtered;
}
console.log("dasgal-4", getSedans(cars));

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let filtered = cars.filter((car) => {
    return car.brand == brandName;
  });
  return filtered;
}
console.log("dasgal-5", filterByBrand(cars, "Hyundai"));

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage > 100000;
  });
  return filtered;
}
console.log("dasgal-6", getHighMileageCars(cars));

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  let addEfficiency = cars.filter((car) => {
    if (car.fuelEfficiency < 5) {
      return car && (car.efficient = true);
    } else {
      return car && (car.efficient = false);
    }
  });
  return addEfficiency;
}
console.log("dasgal-7", addEfficiencyFlag(cars));
// // 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  return cars.map((car) => {
    return {
      ...car,
      price: car.price * 0.15,
    };
  });
}
console.log("dasgal-8", increaseCarPrices(cars));

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return filtered;
}
console.log("dasgal-9", getLowMileageCars(cars));

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let min = cars[0];
  cars.forEach((car) => {
    if (car.fuelEfficiency < min.fuelEfficiency) {
      min = car;
    }
  });
  return min;
}
console.log("dasgal-10", getMostEfficientCar(cars));

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let max = cars[0];
  cars.forEach((car) => {
    if (car.price > max.price);
  });
  return max;
}
console.log("dasgal-11", getMostExpensiveCar(cars));

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalMileage = 0;
  cars.forEach((car) => {
    totalMileage += car.mileage;
  });
  return totalMileage;
}
console.log("dasgal-12", "Нийлбэр", getTotalMileage(cars));

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filtered = cars.filter((car) => {
    return car.supplier == supplierName;
  });
  return filtered;
}
console.log("dasgal-13", filterBySupplier(cars, "CityMotors"));

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let modelNames = cars.map((car) => {
    return {
      model: car.model,
    };
  });
  return modelNames;
}
console.log("dasgal-14", getCarModels(cars));

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let sortAscending = cars.sort((car2, car1) => {
    return car2.price - car1.price;
  });
  return sortAscending;
}
console.log("dasgal-15", sortByPriceAscending(cars));

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let filtered = cars.filter((car) => {
    return car.engineSize > 2;
  });
  return filtered;
}
console.log("dasgal-16", getLargeEngineCars(cars));

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let arrBrands = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrand = [];
  arrBrands.forEach((brand) => {
    if (uniqueBrand.includes(brand)) {
    } else {
      uniqueBrand.push(brand);
    }
  });
  return uniqueBrand;
}
const resultUniqueBrand = getUniqueBrand(car);
console.log(resultUniqueBrand);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let map = cars.map((car) => {
    return {
      model: car.model,
      year: car.year,
    };
  });
  return map;
}
console.log("dasgal-18", getModelAndYearList(cars));

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  let efficientCars = cars.map((car) => {
    if (car.fuelEfficiency < 4) {
      car.superEfficient = "true";
    } else {
      car.superEfficient = "false";
    }
    return car;
  });
  return efficientCars;
}
console.log("dasgal-19", tagSuperEfficientCars(cars));
// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  return cars.map((car, index) => {
    return {
      ...car,
      id: index + 1,
    };
  });
}
console.log("dasgal-20", addIdToCars(cars));
