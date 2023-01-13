class bank {
    constructor(balance, loan, loanBalance){
        this.balance = balance;
        this.loan = loan;
        this.loanBalance = loanBalance;
    }

    getBalance(){
        return this.balance;
    }

    updateBalance(ammount){
        console.log("previous balance: " + this.balance);

        this.balance += ammount;

        console.log("new balance: " + this.balance);

        loadPageValues();        
    }

    getLoan(balance, loan){
        //if loanCount is 0, perform loan, else refuse loan.
        if(this.loanBalance === 0){
            if(loan <= balance*2){
                console.log("loan Allowed ammount: "+loan)
                this.updateBalance(loan);
                this.updateLoanBalance(-loan);
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

    updateLoanBalance(ammount){
        this.loanBalance += ammount;
        loadPageValues();
    }
}

class work{

    constructor(workBalance, salary){
        this.workBalance = workBalance;
        this.salary = salary;
    }

    banksession = new bank(100,0,0,0);

    getWorkBalance(){
        return this.workBalance;
    }

    work(salary){
        this.workBalance += salary;

        loadPageValues();
        console.log("WERK  WERK");
    }

    bankTransfer(){

        if(this.banksession.loanBalance != 0){
            let deduction = this.workBalance*0.1;
            let transferAmmount = this.workBalance-deduction;
    
            this.banksession.updateBalance(transferAmmount);
            this.banksession.updateLoanBalance(deduction);
        } else {
            this.banksession.updateBalance(this.workBalance);
        }


        this.workBalance = 0;
        loadPageValues();
    }

    loanTransfer(){
        let remainingLoanAmmount = this.workBalance + this.banksession.loanBalance;
        

        console.log("workbalance: "+this.workBalance+", loanbalance: "+this.banksession.loanBalance+", remainingLoanAmmount: "+remainingLoanAmmount);

        let remainingFunds = this.workBalance - remainingLoanAmmount;

        console.log("workbalance: "+this.workBalance+", remainingLoanAmmount: "+remainingLoanAmmount+", remainingFunds: "+remainingFunds);

        this.banksession.updateLoanBalance(remainingLoanAmmount);
        if(remainingFunds > 0){
            this.banksession.updateBalance(this.banksession.balance+remainingFunds);
        }
        

        loadPageValues();
    }

}

class laptops{

}


















worksession = new work(0, 0);


// Here we write the function to populate our html objects with the values from our javascript
function loadPageValues(){
    
    // we access the banking values through the id on the div
    document.getElementById("balance").innerText = worksession.banksession.getBalance();

    document.getElementById("loan").innerText = worksession.banksession.getLoanBalance();

    document.getElementById("workBalance").innerText = worksession.getWorkBalance();

    document.getElementById("repayLoanBtn").style.display = 'none';


    if(worksession.banksession.loanBalance < 0){
        document.getElementById("repayLoanBtn").style.display = 'block';

    }

    console.log("Script Postinitialization");
}


function loanPrompt(){
    worksession.banksession.getLoan(worksession.banksession.getBalance(),parseInt(prompt()));
}



console.log("Script Preinitialization");

loadPageValues();



document.getElementById("loanBtn").addEventListener("click", loanPrompt);

document.getElementById("workBtn").addEventListener("click", () => worksession.work(100));

document.getElementById("bankBtn").addEventListener("click", () => worksession.bankTransfer());

document.getElementById("repayLoanBtn").addEventListener("click", () => worksession.loanTransfer());

