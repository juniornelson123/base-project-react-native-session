import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Form from './signInForm'

class SignIn extends Component{
	static navigationOptions = {
		title: 'Principal'
	}

	open(values){
		console.log(values)
	}

	render(){
		return(
			<View>
				<Form	onSubmit={this.open}/>
			</View>
		)
	}
}

export default SignIn