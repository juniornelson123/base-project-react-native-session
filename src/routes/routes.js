import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  addNavigationHelpers, StackNavigator} from 'react-navigation'

import Home from '../home/home'
import SignIn from '../signIn/signIn'
import Splash from '../splash/splash'


export const RoutesApp = StackNavigator({
	Home: {screen: Home},
	SignIn: {screen: SignIn},
	Splash: {screen: Splash}
})

const Routes = ({ dispatch, nav }) => (
	<RoutesApp navigation={ addNavigationHelpers({dispatch, state: nav})}/>
)

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(Routes)