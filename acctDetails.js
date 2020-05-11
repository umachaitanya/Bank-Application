class AcctDetails {
    constructor(accountNumber, accountHolderName, accountBalance, depositAmount,withdrawAmount ) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.minimumBalance = function () {
            if (this.accountBalance < 1000) {
                return this.accountBalance - 10
            }
            else {
                return this.accountBalance
            }
        };
        this.depositAmount = depositAmount;
        this.afterCredit = function(){
            return this.depositAmount+this.minimumBalance()
        };
        this.withdrawAmount = withdrawAmount;
        this.afterDebit = function(){
            if(this.withdrawAmount<= this.minimumBalance()){
                return this.minimumBalance()-this.withdrawAmount;
            }
            else{
                return ("amount is insuffiecient in your account")
            }
        }
    }
    getAccountDetails() {
        if(typeof(this.accountNumber)== "number" && 
        typeof(this.accountHolderName)=="string" &&
         typeof(this.accountBalance)=="number") {
            return (`
            Account Number : ${this.accountNumber} 
            Account Holder Name : ${this.accountHolderName} 
            Account Balance : ${this.minimumBalance()} balance
           `)
         }
         else{
             return ("Invalid value")
         }
      
    }
    setDepositAmount(depositAmount) {
        this.depositAmount = depositAmount;
        return (`after amount credited : 
        total bal is : ${this.afterCredit()}`)
    }
    setWithdrawlAmount(withdrawAmount){
        this.withdrawAmount = withdrawAmount;
        return (`after amount debited : 
        total bal is : ${this.afterDebit()}`)
    }
}

module.exports = { AcctDetails }