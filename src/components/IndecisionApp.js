import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component{
	state = {
		//options: props.options
		options: []
	};
	/*
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

	}*/

	handleDeleteOptions = () => {
	
		this.setState(() => ({options: []}));
	
	}
	
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
				options: prevState.options.filter((option) => {
					return optionToRemove !== option;
				})
		}));
	}
	
	handlePick = () => {
		const randomPick = Math.floor(Math.random() * this.state.options.length);
		const pick = this.state.options[randomPick];
		alert(pick);
	}
	
	handleAddOption = (option) => {
		if(!option){
			return 'Enter valid value to add item';
		}
		else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}	
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
			}));

	}
	
	render() {
		const subtitle = 'Put your life in the hands of a computer';
		
		return(
			<div>
				<Header subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options 
					options={this.state.options} 
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>

			</div>
		);
	}
	
		componentDidMount() {
		
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(() => ({options}));
			}
		} catch (e) {
			
		}

		
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
		}
		
	}
	
	componentWillUnmount() {
		console.log('componentDidUnmount!');
	}
}

IndecisionApp.defaultProps = {
	options: []
}
