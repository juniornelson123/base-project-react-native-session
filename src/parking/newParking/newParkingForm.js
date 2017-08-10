import React, { Component } from 'react'
import { View, ScrollView ,Text, TouchableOpacity, StyleSheet, Picker, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Input from '../../common/form/input'
import { NavigationActions } from 'react-navigation'

const newParkingAction = NavigationActions.navigate({

  routeName: 'SignUp',

  params: {},

  action: NavigationActions.navigate({ routeName: 'NewParkingForm'})
})

class NewParkingForm extends Component{

	constructor(props) {
		super(props);
		
		this.state = {language: null}
	}
	render(){
		return(
			<ScrollView style={styles.containerForm}>
				<View style={styles.containerForm}>
					<View>
						<Field 
						name="name"
						label="Nome"
						component={Input}/>
					</View>
					
					<View>
						<Field 
							name="description"
							label="Descrição"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="cep"
							label="Cep"
							component={Input}/>
					</View>


					<View>
						<Field 
							name="district"
							label="Bairro"
							component={Input}/>
					</View>


					<View>
						<Field 
							name="address"
							label="Endereço"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="number"
							label="Numero"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="complement"
							label="Complemento"
							component={Input}/>
					</View>
					<View>
						<Picker
						  selectedValue={this.state.language}
						  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
						  <Picker.Item label="Java" value="java" />
						  <Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
					


					<Button 
						title="Entrar"
						onPress={this.props.handleSubmit} 
					/>
				</View>	
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	containerForm: {
		margin: 10
	}
})

export default reduxForm({form: "newParkingForm"})(NewParkingForm)