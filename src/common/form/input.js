import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class Input extends Component{
	constructor(props) {
		super(props);
		
	}
	

	render(){

		return(
			<View>
				<Text>{this.props.label}</Text>
				<TextInput 
					{...this.props.inputProps}
					secureTextEntry = {this.props.secureTextEntry}
					onChangeText={this.props.input.onChange}
		      onBlur={this.props.input.onBlur}
		      onFocus={this.props.input.onFocus}
		      value={this.props.input.value}
					/>
			</View>
		)
			
	}
		
}

export default Input