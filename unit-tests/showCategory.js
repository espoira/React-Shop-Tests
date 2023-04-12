class HyperShop {
    constructor(){
        super();
        this.state = {
			typeName: '',
            categories:[
                { id: 1, name: 'Бытовая химия' },
                { id: 2, name: 'Косметика и гигиена' },
                { id: 3, name: 'Товары для дома' },
                { id: 4, name: 'Товары для детей и мам' },
                { id: 5, name: 'Посуда' }
            ],
            flag: false,    
        };
        this.showCategory = this.showCategory.bind(this);
    };

    showCategory = (title) => {
        this.setState ({typeName: title});
        this.setState ({flag: true});
		return this.state.typeName;
    };
	
}

module.exports = HyperShop