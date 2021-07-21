const appleStore = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products, targetPrice) {
  const expensiveProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price >= targetPrice) {
      expensiveProducts.push(products);
    }
  }
  //console.log("filterExpensiveProducts: ", expensiveProducts);
  return expensiveProducts;
}
const expensiveProducts = filterExpensiveProducts(appleStore.products, 1000);


// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000
// const cheapProducts = function();


function filterCheapProducts(products, targetPrice) {
  const cheapProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price < targetPrice) {
      cheapProducts.push(products);
    }
  }
  return cheapProducts;
}
const cheapProducts = filterCheapProducts(appleStore.products, 1000);


// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery
// const productsThatNeedToBeReceived = function();

function incomingDelivery(products){
  const productsThatNeedToBeReceived = [];

  for (let i = 0; i < products.length; i++){
    const product = products[i];
    const deliveryIncoming = product.stock.incomingDelivery;

    if(deliveryIncoming){
      productsThatNeedToBeReceived.push(products);
    }

  }
  return productsThatNeedToBeReceived;
}
const productsThatNeedToBeReceived = incomingDelivery(appleStore.products)

// console.log("products to receive: ", productsThatNeedToBeReceived);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock

// const outOfStockProducts = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

// const productsThatNeedToBeOrdered = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

// const tablets = function();

// function findTablet(products) {
//   let tabletFound = [];

//   for (let i = 0; i < products.length; i++) {
//     const type = products[i].type;

//     if (type === "tablet") {
//       tabletFound.push(products);
//     }
//   }
//   return tabletFound;
// }

// const tablets = findTablet(store.products);

// console.log("tablet array: ", tablets);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// const computers = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"
// const iMac = function();

function findImac(products) {
  //  console.log("Inside findImac: ", products);
  let imacFound = null;

  for (let i = 0; i < products.length; i++) {
    const name = products[i].name;

    if (name === "iMac") {
      imacFound = products[i];
    }
  }
  return imacFound;
}

const result = findImac(appleStore.products);
// console.log(result);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

function findIPhone12(products) {
  let foundItem = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;

    if (name === "iPhone 12") {
      foundItem = product;
    }
  }

  return foundItem;
}

const iPhone12 = findIPhone12(appleStore.products);

// console.log("iPhone12: ", iPhone12);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

function findIpadMini(appleProducts) {
  // console.log("Inside findIpadMini: ", appleProducts);

  let ipadMini = null;

  for (let i = 0; i < appleProducts.length; i++) {
    const product = appleProducts[i];
    const name = product.name;

    if (name === "iPad mini") {
      ipadMini = product;
    }
  }

  return ipadMini;
}

const iPadMini = findIpadMini(appleStore.products);

// console.log("iPadMini: ", iPadMini);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// const productTypes = function();

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];

const jeepStore = {
  location: "London",
  products: [
    {
      name: "Roof Rack",
      type: "accessory",
      stock: {
        incomingDelivery: false,
        stock: 350
      },
      price: 3500
    },
    {
      name: "Spare Tyre",
      type: "accessory",
      stock: {
        incomingDelivery: true,
        stock: 100
      },
      price: 800
    },
    {
      name: "Jeep Wrangler Unlimited Polar",
      type: "car",
      stock: {
        incomingDelivery: true,
        stock: 40
      },
      price: 37500
    },
    {
      name: "Jeep Wrangler Unlimited Dragon",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 120
      },
      price: 69000
    },
    {
      name: "Jeep Grand Cherokee",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 250
      },
      price: 52000
    }
  ]
};

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total of the items in the cart
// const totalPrice = function()

function totalPrice(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const price = item.product.price;
    const quantity = item.quantity;

    total = total + (price * quantity);
  }
  return total;
  console.log(total);
}

const totalPriceInCart = totalPrice(cart);
console.log("Total Price of the Cart: ", totalPriceInCart);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

// const quantityOfItemsInCart = function()

function countItemsInCart(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantity = item.quantity;

    total = total + quantity;
  }
  return total;
  console.log(total);
}

const totalQuantityInCart = countItemsInCart(cart);
console.log("Total Quantity in Cart: ", totalQuantityInCart);

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"

// const recieptRow = function()

function productInfo(cart){
    
    const name = cart.product.name;
    const type = cart.product.type;
    const price = cart.product.price;
    const quantity = cart.quantity;
    const total = price * quantity;

  return `Name: ${name} | Type: ${type} - Price: £${price} x Quantity: ${quantity} || Total: ${total} \n`;
}
const receiptRow = productInfo(cart[0]);
console.log("Product Info: ", receiptRow);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

function receiptInfo(cart){

  let productsList = "";

  for (let i = 0; i < cart.length; i++){

    productsList = productsList + productInfo(cart[i]);

  }
  return productsList;
}

const receiptMessage = receiptInfo(cart);
console.log("Receipt Message");
console.log(receiptInfo(cart));





// FIND PRODUCT FUNCTION

// function findProduct(products, targetProduct) {
//   console.log("Inside findProduct: ", products, targetProduct);

//   let foundProduct = null;

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const name = product.name;

//     if (name === targetProduct) {
//       foundProduct = product;
//       break;
//     }
//   }

//   return foundProduct;
// }

// const iPadMini = findProduct(appleStore.products, "iPad mini");

// console.log("iPadMini: ", iPadMini);

// const iPhone12 = findProduct(appleStore.products, "iPhone 12");

// console.log("iPhone12: ", iPhone12);

// const jeepWranglerPolar = findProduct(
//   jeepStore.products,
//   "Jeep Wrangler Unlimited Polar"
// );

// console.log("jeepWranglerPolar: ", jeepWranglerPolar);
