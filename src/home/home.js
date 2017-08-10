import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../signIn/signInActions'

let openClose = null

let exit = null
class Home extends Component{
	static navigationOptions = {
		title: 'Principal',
		headerLeft: <TouchableOpacity onPress={() => openClose('DrawerOpen')}><Image source={require('../../imgs/icon-toogle-white.png')} style={{width: 40, height: 40}} /></TouchableOpacity>
		
	}

	componentDidMount(){
		exit = this.props.logout
		openClose=this.props.navigation.navigate

	}

	render(){
		return(
			<View>
				<Text>Home</Text>
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(null, mapDispatchToProps)(Home)