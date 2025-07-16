import { capitalize, reverseString } from "./exercises/stringUtils";
console.log(capitalize("football"));
console.log(reverseString("Google"));

import { Finance } from "./exercises/finance";

const loanPayment = Finance.LoanCalculator.calculateMonthlyPayment(
  100000,
  5,
  60
);
console.log(`Ежемесячный платёж: ${loanPayment.toFixed(2)} Euro`);

const tax = Finance.TaxCalculator.calculateTax(1200000, 13);
console.log(`Налог с дохода: ${tax.toFixed(2)} Euro`);

import { UserManagement } from "./exercises/userManagement";

const admin = new UserManagement.Admin.AdminUser("Иван", "ivan@example.com");
console.log(`${admin.name} super admin? ${admin.isSuperAdmin}`);

admin.grantSuperAdmin();
console.log(`${admin.name} super admin? ${admin.isSuperAdmin}`);

import {
  generateFibonacci,
  generatePrimeNumbers,
} from "./exercises/sequenceUtils";

console.log("Фибоначчи до 100:", generateFibonacci(100));
console.log("Простые числа до 50:", generatePrimeNumbers(50));
