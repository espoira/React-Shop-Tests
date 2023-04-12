class CartRemoving {
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
        this.removeFromCart = this.removeFromCart.bind(this);
    };

    removeFromCart = (itemId) => {
        const newOrder = this.state.order.filter((el) => el.id !== itemId);
        this.setState({order: newOrder});
     
        this.state.order.map ((orderItem) => {
            if (orderItem.id === itemId) {
                this.setState({pricesSum:this.state.pricesSum - orderItem.quantity * orderItem.price * 6});
                return this.setState({amount:this.state.amount - orderItem.quantity});
            }
        });
    };
	
}

module.exports = CartRemoving