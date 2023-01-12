class bank {
    constructor(balance, loan, loanCount, loanBalance){
        this.balance = balance;
        this.loan = loan;
        this.loanCount = loanCount;
        this.loanBalance = loanBalance;
    }

    getBalance(){
        return this.balance;
    }

    updateBalance(ammount){
        this.balance = this.balance + ammount;
    }

    getLoan(balance, loan){
        
        //if loanCount is 0, perform loan, else refuse loan.
        if(this.loanCount === 0){
            if(loan <= balance*2){
                this.updateBalance(loan);
                ++this.loanCount;
            } else {
                console.log("error, loan sum to large");
            }

        } else {
            console.log("error, loan already taken");
        }
    }

    getLoanBalance(){
        return this.loanBalance;
    }
}

class work {

}

class laptops{

}


// Here we write the function to populate our html objects with the values from our javascript
function initializePageValues(){
    
    // we access the banking values through the id on the div
    document.getElementById("balance").innerText.replace(bank.getBalance);
}



initializePageValues();