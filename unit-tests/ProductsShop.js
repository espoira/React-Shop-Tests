class ProductsShop {
    constructor(){
        super();
        this.state = {
			goodId: 0,
            flagProduct: false,    
        };
        this.showProduct = this.showProduct.bind(this);
    };

    showProduct = (id) => {
      this.setState ({goodId: id});
      this.setState ({flagProduct: true});
    };
	
}

module.exports = ProductsShop