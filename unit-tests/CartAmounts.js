class CartAmounts {
    constructor(){
        super();
        this.state = {
            flag: false,
            typeName: '',
            order: [],
            amount: 0,
            pricesSum: 0,
            flagCart: false,
        };
        this.incQuantity = this.incQuantity.bind(this);
    };


    incQuantity = (itemId) => {
        const newOrder = this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                this.setState({pricesSum:this.state.pricesSum + orderItem.price * 6});
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            } else {
                return orderItem;
            }
        });
        this.setState({order:newOrder});
        this.setState({amount:this.state.amount + 1});
    };
	
}

module.exports = CartAmounts