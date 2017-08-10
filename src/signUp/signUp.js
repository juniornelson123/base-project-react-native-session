import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { register } from '../signIn/signInActions'
import Form from './signUpForm'


class SignUp extends Component{
	static navigationOptions = {
		title: 'Cadastrar'
	}

	render(){
		return(
			<View style={styles.container}>
				<Form	onSubmit={this.props.register}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({

	container: {
		margin: 20,
		flex: 1
	},

	containerTitle: {
		alignSelf: 'center',
		flex: 1,
		justifyContent: 'center'

	},

	title: {
		fontSize: 24
	},

	body: {
		flex: 2
	}


})

const mapDispatchToProps = dispatch => bindActionCreators({ register }, dispatch)
export default connect(null, mapDispatchToProps)(SignUp)




