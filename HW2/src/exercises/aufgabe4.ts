type ProductInfo = [string, number, number];

// Функция обновления склада
function updateStock(
  inventory: Record<string, number>,
  productInfo: ProductInfo
): Record<string, number> {
  const [productName, , quantity] = productInfo;
  inventory[productName] = quantity;
  return inventory;
}

const inventory = {
  apple: 10,
  banana: 5,
};

const productInfo: ProductInfo = ["apple", 1.5, 20];

const updatedInventory = updateStock(inventory, productInfo);

console.log(updatedInventory);
