import Action from "../Models/Action";
import dal_mysql from "../Utils/dal_mysql";

const getAccountActions = async (account: number) => {
  const SQLcmd = `SELECT * FROM account_actions WHERE account_num = '${account}'`;
  return await dal_mysql.execute(SQLcmd);
};

const addAction = async (action: Action) => {
  const SQLcmd = `INSERT INTO account_actions
    (account_num, action,amount,date,payments,return_date)
    VALUES
    ('${action.accountNum}','${action.action}','${action.amount}','${action.date}','${action.payments}','${action.returnDate}')`;
    return await dal_mysql.execute(SQLcmd);
};

export { getAccountActions, addAction };
