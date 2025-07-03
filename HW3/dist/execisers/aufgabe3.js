"use strict";
const product = {
    name: "Iphone 16 Mini",
    price: 1550,
    discount: 15,
};
const calculateDiscount = (product) => {
    const { name, price, discount } = product;
    const discountedPrice = (price * discount) / 100;
    const newPrice = price - discountedPrice;
    console.log(`Новая цена за ${name} состовляет ${newPrice}`);
    return newPrice;
};
calculateDiscount(product);
