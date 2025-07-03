"use strict";
const orders = [
    { orderId: "order1", amount: 10, status: "pending" },
    { orderId: "order2", amount: 5, status: "shipped" },
    { orderId: "order3", amount: 3, status: "delivered" },
    { orderId: "order4", amount: 7, status: "pending" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
const pendingOrders = filterOrdersByStatus(orders, "pending");
console.log(pendingOrders);
/*
enum Status {
  PENDING = "pending",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

type Orders = {
  orderId: string;
  amount: number;
  status: Status;
};

const orders = [
  {
    orderId: "order1",
    amount: 2,
    status: Status.DELIVERED,
  },
  {
    orderId: "order2",
    amount: 5,
    status: Status.PENDING,
  },
];

const filterOrdersByStatus = (orders: Orders[], status: Status): Orders[] => {
  const result = orders.filter((order) => order.status === status);
  return result;
};

console.log(filterOrdersByStatus(orders, Status.DELIVERED));
*/
