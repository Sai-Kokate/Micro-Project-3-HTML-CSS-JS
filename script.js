const dataArray = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
  {
    id: 21,
    foodname: "Salmon",
    calorie: 206,
    category: "Protein",
    protiens: 22,
    cab: 0,
  },
  {
    id: 22,
    foodname: "Tuna",
    calorie: 179,
    category: "Protein",
    protiens: 39,
    cab: 0,
  },
  {
    id: 23,
    foodname: "Beef",
    calorie: 250,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 24,
    foodname: "Pork",
    calorie: 242,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 25,
    foodname: "Lamb",
    calorie: 294,
    category: "Protein",
    protiens: 25,
    cab: 0,
  },
  {
    id: 26,
    foodname: "Shrimp",
    calorie: 85,
    category: "Protein",
    protiens: 20,
    cab: 0.2,
  },
  {
    id: 27,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 28,
    foodname: "Brown Rice",
    calorie: 216,
    category: "Grain",
    protiens: 4.5,
    cab: 45,
  },
  {
    id: 29,
    foodname: "Oats",
    calorie: 389,
    category: "Grain",
    protiens: 16.9,
    cab: 66,
  },
  {
    id: 30,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 31,
    foodname: "Bread",
    calorie: 265,
    category: "Grain",
    protiens: 9.4,
    cab: 49,
  },
  {
    id: 32,
    foodname: "Pasta",
    calorie: 131,
    category: "Grain",
    protiens: 5.5,
    cab: 26,
  },
  {
    id: 33,
    foodname: "Milk",
    calorie: 60,
    category: "Dairy",
    protiens: 3.2,
    cab: 5.1,
  },
  {
    id: 34,
    foodname: "Cheese",
    calorie: 402,
    category: "Dairy",
    protiens: 25,
    cab: 2.4,
  },
  {
    id: 35,
    foodname: "Yogurt",
    calorie: 59,
    category: "Dairy",
    protiens: 3.5,
    cab: 5,
  },
  {
    id: 36,
    foodname: "Butter",
    calorie: 717,
    category: "Dairy",
    protiens: 0.9,
    cab: 0.1,
  },
  {
    id: 37,
    foodname: "Almonds",
    calorie: 579,
    category: "Nuts",
    protiens: 21,
    cab: 22,
  },
  {
    id: 38,
    foodname: "Walnuts",
    calorie: 654,
    category: "Nuts",
    protiens: 15,
    cab: 14,
  },
  {
    id: 39,
    foodname: "Peanuts",
    calorie: 567,
    category: "Nuts",
    protiens: 26,
    cab: 16,
  },
  {
    id: 40,
    foodname: "Cashews",
    calorie: 553,
    category: "Nuts",
    protiens: 18,
    cab: 30,
  },
];

console.log(dataArray);

// 1. list all the food items

const listAllItems = (dataArray) => {
  let i = 1;
  foodItems = dataArray.map((food) => `${i++}. ${food.foodname}`);
  return foodItems.join("<br>");
};

console.log(listAllItems(dataArray));

// 2. list all the food items with category vegetables

const listAllVegetables = (dataArray) => {
  let i = 1;
  const vegetables = dataArray
    .filter((food) => food.category === "Vegetable")
    .map((vegetable) => `${i++}. ${vegetable.foodname}`);
  return vegetables.join("<br>");
};

console.log(listAllVegetables(dataArray));

// 3. list all the food items with category fruit

const listAllFruits = (dataArray) => {
  let i = 1;

  const fruits = dataArray
    .filter((food) => food.category === "Fruit")
    .map((fruit) => `${i++}. ${fruit.foodname}`);
  return fruits.join("<br>");
};

console.log(listAllFruits(dataArray));

// 4. list all the food items with category protien

const listAllProtiens = (dataArray) => {
  let i = 1;

  const protiens = dataArray
    .filter((food) => food.category === "Protein")
    .map((protien) => `${i++}. ${protien.foodname}`);
  return protiens.join("<br>");
};

console.log(listAllProtiens(dataArray));

// 5. list all the food items with category nuts

const listAllNuts = (dataArray) => {
  let i = 1;

  const nuts = dataArray
    .filter((food) => food.category === "Nuts")
    .map((nut) => `${i++}. ${nut.foodname}`);
  return nuts.join("<br>");
};

console.log(listAllNuts(dataArray));

// 6. list all the food items with category grains

const listAllGrains = (dataArray) => {
  let i = 1;

  const grains = dataArray
    .filter((food) => food.category === "Grain")
    .map((grain) => `${i++}. ${grain.foodname}`);
  return grains.join("<br>");
};

console.log(listAllGrains(dataArray));

// 7. list all the food items with category dairy

const listAllDairy = (dataArray) => {
  let i = 1;

  const dairy = dataArray
    .filter((food) => food.category === "Dairy")
    .map((product) => `${i++}. ${product.foodname}`);
  return dairy.join("<br>");
};

console.log(listAllDairy(dataArray));

// 8. list all the food items with calorie above 100

const highCalorieProducts = (dataArray) => {
  let i = 1;

  const products = dataArray
    .filter((food) => food.calorie > 100)
    .map((product) => `${i++}. ${product.foodname}`);
  return products.join("<br>");
};

console.log(highCalorieProducts(dataArray));

// 9. list all the food items with calorie below 100
const lowCalorieProducts = (dataArray) => {
  let i = 1;

  const products = dataArray
    .filter((food) => food.calorie < 100)
    .map((product) => `${i++}. ${product.foodname}`);
  return products.join("<br>");
};

console.log(lowCalorieProducts(dataArray));

// 10. list all the food items with highest protien content to lowest

const protienSorted = (dataArray) => {
  let i = 1;

  const products = [...dataArray];

  const names = products
    .sort((a, b) => {
      if (Number(a.protiens) > Number(b.protiens)) {
        return -1;
      }
      if (Number(a.protiens) < Number(b.protiens)) {
        return 1;
      }
      return 0;
    })
    .map((product) => `${i++}. ${product.foodname} => ${product.protiens}`);

  return names.join("<br>");
};

console.log(protienSorted(dataArray));

// 11. list all the food items with lowest cab content to highest

const cabSorted = (dataArray) => {
  let i = 1;

  const products = [...dataArray];

  const names = products
    .sort((a, b) => {
      if (Number(a.cab) < Number(b.cab)) {
        return -1;
      }
      if (Number(a.cab) > Number(b.cab)) {
        return 1;
      }
      return 0;
    })
    .map((product) => `${i++}. ${product.foodname} => ${product.cab}`);

  return names.join("<br>");
};

console.log(cabSorted(dataArray));

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item5 = document.querySelector("#item5");
const item6 = document.querySelector("#item6");
const item7 = document.querySelector("#item7");
const item8 = document.querySelector("#item8");
const item9 = document.querySelector("#item9");
const item10 = document.querySelector("#item10");
const item11 = document.querySelector("#item11");

const para1 = document.createElement("p");
para1.innerHTML = listAllItems(dataArray);
item1.append(para1);

const para2 = document.createElement("p");
para2.innerHTML = listAllVegetables(dataArray);
item2.append(para2);

const para3 = document.createElement("p");
para3.innerHTML = listAllFruits(dataArray);
item3.append(para3);

const para4 = document.createElement("p");
para4.innerHTML = listAllProtiens(dataArray);
item4.append(para4);

const para5 = document.createElement("p");
para5.innerHTML = listAllNuts(dataArray);
item5.append(para5);

const para6 = document.createElement("p");
para6.innerHTML = listAllGrains(dataArray);
item6.append(para6);

const para7 = document.createElement("p");
para7.innerHTML = listAllDairy(dataArray);
item7.append(para7);

const para8 = document.createElement("p");
para8.innerHTML = highCalorieProducts(dataArray);
item8.append(para8);

const para9 = document.createElement("p");
para9.innerHTML = lowCalorieProducts(dataArray);
item9.append(para9);

const para10 = document.createElement("p");
para10.innerHTML = protienSorted(dataArray);
item10.append(para10);

const para11 = document.createElement("p");
para11.innerHTML = cabSorted(dataArray);
item11.append(para11);
