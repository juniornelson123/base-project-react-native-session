import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/input'

class SignInForm extends Component{
	static navigationOptions = {
		title: 'Entrar'
	}

	render(){
		return(
			<View>
				<View>
					<Field 
					name="email"
					label="Email"
					component={Input}/>
				</View>
				
				<View>
					<Field 
						name="password"
						label="Senha"
						component={Input}/>
				</View>

				<Button 
					title="Entrar"
					onPress={this.props.handleSubmit} 
				/>	
			</View>
		)
	}
}

export default reduxForm({form: "signInForm"})(SignInForm)