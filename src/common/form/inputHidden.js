import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class InputHidden extends Component{
	constructor(props) {
		super(props);
		
	}
	

	render(){

		return(
			<View>
				<TextInput 
					{...this.props.inputProps}
					secureTextEntry = {this.props.secureTextEntry}
					onChangeText={this.props.input.onChange}
		      onBlur={this.props.input.onBlur}
		      onFocus={this.props.input.onFocus}
		      value={this.props.value}
					/>
			</View>
		)
			
	}
		
}

export default InputHidden