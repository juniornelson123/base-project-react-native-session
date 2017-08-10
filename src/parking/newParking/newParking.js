import React, { Component } from 'react'
import { View } from 'react-native'
import Form from './newParkingForm'

class NewParking extends Component{
	submit(values){
		console.log(values)
	}
	render() {
		return(
			<View>
				<Form onSubmit={this.submit}/>
			</View>
		)
	}
}

export default NewParking