// getter
// setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // balance ke set kortese
  //   addBalance(balance: number) {
  //     this._userBalance += balance;
  //   }

  //setter use kore korte chaile
  set addBalance(amount: number) {
    this._userBalance += amount;
  }

  // get korbo
  //   getBalance() {
  //     return this._userBalance;
  //   }

  // getter use kore get korte chaile
  get getBalance() {
    return this._userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const ashrafBhaiAccount = new BankAccount(111, "Ashraf", 20);
// ashrafBhaiAccount.addBalance(100); // function call korte hocche
// ashrafBhaiAccount.addBalance(60);

// console.log(ashrafBhaiAccount.getBalance()); // function call korte hocche

ashrafBhaiAccount.addBalance = 100;
ashrafBhaiAccount.addBalance = 100;
console.log(ashrafBhaiAccount);
