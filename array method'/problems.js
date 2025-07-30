let datas = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "Unitel",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(product) {
  let filtered = product.filter((product) => {
    return product.discountPercent > 0;
  });
  return filtered;
}
console.log(getDiscountedProducts(datas));
console.log("==============1");

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let filtered = products.filter((products) => {
    return products.stock === 0;
  });
  return filtered;
}
console.log(getOutOfStockProducts(datas));
console.log("==============2");

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let filtered = products.filter((products) => {
    return products.price > 1000000;
  });
  return filtered;
}
console.log(getExpensiveProducts(datas));
console.log("==============3");

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products, computers) {
  let filtered = products.filter((products) => {
    return products.category == "categorys";
  });
  return filtered;
}
console.log(getComputers(datas));
console.log("==============4");

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let filtered = products.filter((products) => {
    return products.brand == brandName;
  });
  return filtered;
}
console.log(filterByBrand(datas, "Apple"));
console.log("==============5");

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  let addHeavy = products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = "true";
    } else {
      product.isHeavy = "false";
    }
  });
  return addHeavy;
}
console.log(addIsHeavyFlag(datas));
console.log("==============6");

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  return {
    ...products,
    price: products.price + (products.price * 10) / 100,
  };
}
console.log(increasePriceByTenPercent(datas));
console.log("==============7");

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  let finalPrice = products.map((product) => {
    product.finalPrice;
  });
}
console.log("==============8");

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let maxProduct = products[0];
  products.forEach((product) => {
    if (product.rating > maxProduct.rating) {
      maxProduct = product;
    }
  });
  return maxProduct;
}
console.log(getTopRatedProduct(datas));

console.log("==============9");

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let minProduct = products[0];
  products.forEach((product) => {
    if (product.price < minProduct.price) {
      minProduct = product;
    }
  });
  return minProduct;
}
console.log(getCheapestProduct(datas));
console.log("==============10");

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let;
}

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}
console.log(getTotalPrice(datas));
console.log("==============12");

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  let name = "Unitel";
  let filtered = products.filter((product) => {
    return product.supplier === name;
  });

  return filtered;
}
console.log("==============13");
console.log(filterBySupplier(datas));
// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let filtered = products.map((product) => {
    return {
      name: product.name,
    };
  });

  return filtered;
}
console.log("==============14");
console.log(getProductNames(datas));

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  let priceAscending = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return priceAscending;
}
console.log("==============15");
console.log(sortByPriceAscending(datas));

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
 let filtered  = products.filter(())
}

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  // ...
}

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  // ...
}

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  // ...
}

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  // ...
}
