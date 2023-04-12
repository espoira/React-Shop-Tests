class CartAdding {
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
        this.addToCart = this.addToCart.bind(this);
    };

    addToCart = (item) => {
        const itemIndex = this.state.order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            this.setState({order: [...this.state.order, newItem]});
        } else {
            const newOrder = this.state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            this.setState({order:newOrder});
        }
        this.setState({amount:this.state.amount + 1});
        this.setState({pricesSum:this.state.pricesSum + item.price * 6});
    };
	
}

module.exports = CartAdding


    