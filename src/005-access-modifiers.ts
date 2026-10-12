// access >> modify
class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  addBalance(balance: number) {
    this._userBalance += balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const ashrafBhaiAccount = new BankAccount(111, "Ashraf", 20);
ashrafBhaiAccount.addBalance(0);

console.log(ashrafBhaiAccount);
