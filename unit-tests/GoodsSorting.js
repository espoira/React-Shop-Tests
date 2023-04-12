class GoodsSorting {
    constructor(){
        super();
        this.state = {
            value: 'empty',
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
      this.setState({value: event.target.value});
      return this.state.value;
    }
	
}

module.exports = GoodsSorting