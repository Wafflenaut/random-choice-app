class Counter extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: props.count
		};
	}
	handleAddOne() {
		console.log('Add One');
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	handleMinusOne() {
		console.log('Minus One');
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		});
	}

	handleReset(){
		console.log('Reset Counter');
		this.setState(() => {
			return {
				count: 0
			};
		});
	}
	render(){
		return (
		<div>
			<h1>Count: {this.state.count}</h1>
			<button onClick={this.handleAddOne}>+1</button>
			<button onClick={this.handleMinusOne}>-1</button>
			<button onClick={this.handleReset}>Reset</button>
		</div>
		)
	}
}

Counter.defaultProps = {
	count : 0
};

ReactDOM.render(<Counter count={5}/>, document.getElementById('app'))

/*
let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};





const renderCounterApp = () => {
	let templateTwo = (
	<div>
		<h1>{count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>Reset</button>
	</div>
	);
	
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/