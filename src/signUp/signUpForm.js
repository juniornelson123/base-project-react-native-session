import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/input'

class SignUpForm extends Component{
	static navigationOptions = {
		title: 'Cadastrar'
	}

	render(){
		return(
			<View>
				
				<View>
					<Field 
					name="name"
					label="Name"
					component={Input}/>
				</View>

				<View>
					<Field 
					name="email"
					label="Email"
					component={Input}/>
				</View>
				
				<View>
					<Field 

						secureTextEntry={true}
						name="password"
						label="Senha"
						component={Input}/>
				</View>

				<Button 
					title="Cadastrar"
					onPress={this.props.handleSubmit} 
				/>	
			</View>
		)
	}
}

export default reduxForm({form: "signUpForm"})(SignUpForm)