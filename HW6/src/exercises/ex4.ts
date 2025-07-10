abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private balance: number;
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super();
    this.balance = initialBalance;
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, Balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Interest applied: ${interest}, Balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  private balance: number;
  private fee: number;

  constructor(initialBalance: number, fee: number) {
    super();
    this.balance = initialBalance;
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
      console.log(
        `Withdrawn: ${amount} + Fee: ${this.fee}, Balance: ${this.balance}`
      );
    } else {
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
