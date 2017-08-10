import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Form from './signInForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './signInActions'

class SignIn extends Component{
	static navigationOptions = {
		title: 'Estaciona Facil'
	}

	open(values){
		console.log(values)
	}

	render(){
		return(
			<View>
				<Form	onSubmit={this.props.login} navigation={this.props.navigation} />
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(null, mapDispatchToProps)(SignIn)