import React, { Component } from 'react'
import { View, ScrollView ,Text, TouchableOpacity, StyleSheet, Picker, Button } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Input from '../../common/form/input'
import InputHidden from '../../common/form/inputHidden'
import PickerInput from '../../common/form/picker'
import { NavigationActions } from 'react-navigation'

const newParkingAction = NavigationActions.navigate({

  routeName: 'SignUp',

  params: {},

  action: NavigationActions.navigate({ routeName: 'NewParkingForm'})
})

class NewParkingForm extends Component{

	constructor(props) {
		super(props);
		
		this.state = {state: null, city: null}
	}

	
	valueChange(value){
		this.setState({...this.state, state: value})
		this.props.getCities(value)
	}	

	render(){
		const getStates = this.props.states.map((state) =>
	  	 <Picker.Item label={state.name} value={state.id} key={state.name.toString()} />          
	  );
		const getCities = this.props.cities.map((city) =>
	  	 <Picker.Item label={city.name} value={city.id} key={city.name.toString()} />          
	  );

		return(
			<ScrollView style={styles.containerForm}>
				<View style={styles.containerForm}>
					<View>
						<Field 
						name="parking[name]"
						label="Nome"
						component={Input}/>
					</View>
					
					<View>
						<Field 
							name="parking[description]"
							label="Descrição"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="parking[address_attributes][cep]"
							label="Cep"
							component={Input}/>
					</View>


					<View>
						<Field 
							name="parking[address_attributes][district]"
							label="Bairro"
							component={Input}/>
					</View>


					<View>
						<Field 
							name="parking[address_attributes][address]"
							label="Endereço"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="parking[address_attributes][number]"
							label="Numero"
							component={Input}/>
					</View>

					<View>
						<Field 
							name="parking[address_attributes][complement]"
							label="Complemento"
							component={Input}/>
					</View>

					<View>
						<Picker
						  selectedValue={this.state.state}
						  onValueChange={(itemValue, itemIndex) => this.valueChange(itemValue)}>
							{ getStates }
						 </Picker>
					</View>
						
					<View>
						<Field 
							name="parking[address_attributes][city_id]"
							component={PickerInput}>
						 	{getCities}
						</Field>
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