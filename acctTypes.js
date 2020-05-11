let { AcctDetails } = require('./acctDetails');

//savings account
class SavingAccount extends AcctDetails {
    constructor(accountNumber, accountHolderName, accountBalance, depositAmount, withdrawAmount) {
        super(accountNumber, accountHolderName, accountBalance, depositAmount, withdrawAmount);
    }
    getAccountDetails() {
        return (`${super.getAccountDetails()}`)
    }
}

//current account
class CurrentAccount extends AcctDetails {
    constructor(accountNumber, accountHolderName, accountBalance, depositAmount, withdrawAmount) {
        super(accountNumber, accountHolderName, accountBalance, depositAmount, withdrawAmount);
    }
    getAccountDetails() {
        return (`${super.getAccountDetails()}`)
    }
}

let savingAccount = new SavingAccount(
    55874100254,               //acctNumber
    "uma chaitanya",           //acct holder name
    1000                      //acct balance
);

//to get account details
console.log(savingAccount.getAccountDetails());
//to withdraw some amount and to get Debited account balance
console.log(savingAccount.setWithdrawlAmount(50));
//to deposit some amount and to get Credited account balance          
console.log(savingAccount.setDepositAmount(1000));


let currentAccount = new CurrentAccount(
    889521400257,               //acctNumber
    "Rachel Green",           //acct holder name
    60000                      //acct balance
);
//console.log(currentAccount.setDepositAmount(100));

