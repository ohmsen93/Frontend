class bank {
    constructor(balance, loan, loanBalance){
        this.balance = balance;
        this.loan = loan;
        this.loanBalance = loanBalance;
    }

    getBalance(){
        //returns our balance.
        return this.balance;
    }

    updateBalance(ammount){
        console.log("previous balance: " + this.balance);
        //Updates our bankBalance with the input, and reloads the page values.
        this.balance += ammount;

        console.log("new balance: " + this.balance);

        loadPageValues();        
    }

    getLoan(balance, loan){
        //if loanCount is 0, continue, else refuse loan.
        if(this.loanBalance === 0){
            //if the loan is above double the balance refuse loan else continue
            if(loan <= balance*2){
                console.log("loan Allowed ammount: "+loan)
                //updates our balance with the input
                this.updateBalance(loan);
                //updates our loanBalance with a negative input.
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
        console.log("updateLoanBalance - Loanbalance: "+this.loanBalance+", updateAmmount: "+ammount);

        //Updates our loanbalance with the input and reloads the page values.
        this.loanBalance += ammount;

        console.log("updateLoanBalance - newLoanBalance: "+this.loanBalance);
        loadPageValues();
    }
}

class work{

    constructor(workBalance, salary){
        this.workBalance = workBalance;
        this.salary = salary;
    }

    //Instanciates our Bank Class.
    banksession = new bank(100,0,0,0);

    getWorkBalance(){
        //returns our workBalance
        return this.workBalance;
    }

    work(salary){
        //adds our salary to our workBalance, and updates the page values.
        this.workBalance += salary;

        loadPageValues();
    }

    bankTransfer(){
        // first we check if the user has an outstanding loan
        if(this.banksession.loanBalance != 0){
            // then we check if the loanBalance is below 100
            if(this.banksession.loanBalance < 100){
                let remainingFunds = this.workBalance + this.banksession.loanBalance;

                // if the loanBalance is below 100, we update the balance with the remaining funds, and then we zero our loanBalance with math.abs
                this.banksession.updateBalance(remainingFunds);
                this.banksession.updateLoanBalance(Math.abs(this.banksession.loanBalance));



            } else {
                // if the loanBalance is above 100, we first calculate 10% of our workBalance.
                let deduction = this.workBalance*0.1;
                // then we calculate the remaining 90%.
                let transferAmmount = this.workBalance-deduction;
        
                //we then transfer 90% to our bankBalance, and 10% to our loanBalance.
                this.banksession.updateBalance(transferAmmount);
                this.banksession.updateLoanBalance(deduction);
            }
        } else {
            // if we do not have a current loanBalance, we transfer our workBalance directly to our loanBalance.
            this.banksession.updateBalance(this.workBalance);
        }

        //Zeroes out the workBalance and loads our page values.
        this.workBalance = 0;
        loadPageValues();
    }

    loanTransfer(){
        //First we calculate wether we have funds remaining after transfering the money from workBalance to loanBalance.
        let remainingLoanAmmount = this.workBalance + this.banksession.loanBalance;


        console.log("workbalance: "+this.workBalance+", loanbalance: "+this.banksession.loanBalance+", remainingLoanAmmount: "+remainingLoanAmmount);

        //If we have money remaining
        if(remainingLoanAmmount > 0){
            

            //we zero out the loanBalance using the current loan balance and Math.abs to turn the negative number positive aka. -200 + 200 = 0
            this.banksession.updateLoanBalance(Math.abs(this.banksession.loanBalance));
            //then we transfer the remaining funds to the bankBalance
            this.banksession.updateBalance(remainingLoanAmmount);
        } else {

            //if we do not have money remaining after the loanTransfer, we simply update the loanBalance and add our workBalance to our loanBalance.
            this.banksession.updateLoanBalance(this.workBalance);
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

