const calculateTotal = (
  price: number,
  quantity: number,
  discount: number = 0
): number | string => {
  if (discount < 0) {
    return `Скидка не может составлять ${discount}%`;
  }

  const total = price * quantity;
  if (discount > 0) {
    return total - (total * discount) / 100;
  }

  return total;
};

console.log(calculateTotal(1000, 3)); 
console.log(calculateTotal(1000, 3, 50)); 
console.log(calculateTotal(1000, 3, -5)); 
