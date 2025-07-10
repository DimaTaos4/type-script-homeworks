"use strict";
class Account {
}
class SavingsAccount extends Account {
    constructor(initialBalance, interestRate) {
        super();
        this.balance = initialBalance;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}, Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}, Balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    applyInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest applied: ${interest}, Balance: ${this.balance}`);
    }
}
class CheckingAccount extends Account {
    constructor(initialBalance, fee) {
        super();
        this.balance = initialBalance;
        this.fee = fee;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}, Balance: ${this.balance}`);
    }
    withdraw(amount) {
        const total = amount + this.fee;
        if (total <= this.balance) {
            this.balance -= total;
            console.log(`Withdrawn: ${amount} + Fee: ${this.fee}, Balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
}
const savings = new SavingsAccount(1000, 0.05);
savings.deposit(500);
savings.withdraw(300);
savings.applyInterest();
const checking = new CheckingAccount(1000, 5);
checking.deposit(200);
checking.withdraw(100);
