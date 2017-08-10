import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/input'
import { NavigationActions } from 'react-navigation'

const signUpAction = NavigationActions.navigate({

  routeName: 'SignUp',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SignUp'})
})

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
						secureTextEntry={true}
						name="password"
						label="Senha"
						component={Input}/>
				</View>

				<Button 
					title="Entrar"
					onPress={this.props.handleSubmit} 
				/>

				<View>
					<TouchableOpacity onPress={() => this.props.navigation.dispatch(signUpAction)}>
						<Text>Cadastre-se</Text>
					</TouchableOpacity>
				</View>	
			</View>
		)
	}
}

export default reduxForm({form: "signInForm"})(SignInForm)