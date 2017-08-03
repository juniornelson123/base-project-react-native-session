import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Home extends Component{
	static navigationOptions = {
		title: 'Principal'
	}

	render(){
		return(
			<View>
				<Text>Home</Text>
			</View>
		)
	}
}


export default Home