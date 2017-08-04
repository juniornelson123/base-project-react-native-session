import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue } from '../signIn/signInActions'

import { Consts } from '../consts'

const isLogged = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

const notLogged = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'SignIn'})
  ]
})

class Splash extends Component{

	componentWillMount() {
	  this.verifyLogin()
	}

	verifyLogin(){
		AsyncStorage.getItem(Consts.keyUser).then(user => {
			if (user) {
				this.props.changeValue(JSON.parse(user))
				this.props.navigation.dispatch(isLogged)
			}else{
				console.log(user)
				this.props.navigation.dispatch(notLogged)


			}

		})
	}

	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text >Carregando...</Text>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({changeValue}, dispatch)

Splash.navigationOptions = {
	header: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)