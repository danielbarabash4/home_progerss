class Action {
  public accountNum: string;
  public action: string;
  public amount: string;
  public date: string;
  public payments: string;
  public returnDate: string;

  constructor(
    accountNum: string,
    action: string,
    amount: string,
    date: string,
    payments: string,
    returnDate: string
  ) {
    this.accountNum = accountNum;
    this.action = action;
    this.amount = amount;
    this.date = date;
    this.payments = payments;
    this.returnDate = returnDate;
  }
}

export default Action;
