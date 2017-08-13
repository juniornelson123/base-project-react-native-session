import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Consts } from '../consts'
import {  DrawerNavigator, addNavigationHelpers, StackNavigator} from 'react-navigation'

import Home from '../home/home'
import SignIn from '../signIn/signIn'
import SignUp from '../signUp/signUp'
import Splash from '../splash/splash'
import NewParking from '../parking/newParking/newParking'
import customDrawerContentComponent from '../common/drawer/customDrawerContentComponent'


export const RoutesApp = StackNavigator({
	Home: {screen: Home},
	Splash: {screen: Splash},
	SignUp: {screen: SignUp},
	NewParking: {screen: NewParking}
}, {
	navigationOptions: {
		headerTitleStyle: { color: Consts.primary_text_color},
		headerStyle: { backgroundColor: Consts.primary_color },
		headerTintColor: '#fff'
		
	}
})

export const DrawerApp = DrawerNavigator({
	Home: {screen: RoutesApp}

}, {
  contentComponent: customDrawerContentComponent
})

const Routes = ({ dispatch, nav }) => (
	<DrawerApp navigation={ addNavigationHelpers({dispatch, state: nav})}/>
)

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(Routes)