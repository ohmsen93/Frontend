class Laptops{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
        this.laptopPath = apiUrl+'computers';
        this.data = {};

    }



    async laptopApi(price){
        console.log(this.laptopPath);
        
        const req = await fetch(this.laptopPath);
        const post = await req.json();

        this.data = post;
    }

    laptopPurchase(id){
        const laptop = this.data[id];

        const price = laptop.price;
    
         

    }

}


export default Laptops;