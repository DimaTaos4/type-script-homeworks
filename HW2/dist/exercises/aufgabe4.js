"use strict";
// Функция обновления склада
function updateStock(inventory, productInfo) {
    const [productName, , quantity] = productInfo;
    inventory[productName] = quantity;
    return inventory;
}
const inventory = {
    apple: 10,
    banana: 5,
};
const productInfo = ["apple", 1.5, 20];
const updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory);
