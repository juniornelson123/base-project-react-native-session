import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Form from './newParkingForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveParking, changeCity ,getStates, getCities } from '../parkingActions'

class NewParking extends Component{
	static navigationOptions = {
		title: "Novo Estacionamento"
	}

	submit(values){
		console.log(values)
	}
	
	componentWillMount() {
		this.props.getStates()		
	}	
	
	render() {
		return(
			<View>
				<Form onSubmit={this.props.saveParking} states={this.props.states} cities={this.props.cities} city={this.props.city} 
					getStates={this.props.getStates} getCities={this.props.getCities} changeCity={this.props.changeCity}/>
			</View>
		)
	}
}

const mapStateToProps = state => ({ states: state.parking.states, cities: state.parking.cities, city: state.parking.city })
const mapDispatchToProps = dispatch => bindActionCreators({saveParking, getStates, getCities, changeCity}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewParking)