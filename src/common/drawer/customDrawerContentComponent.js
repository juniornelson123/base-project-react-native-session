import { NavigationActions, DrawerItems } from 'react-navigation';
import { StyleSheet, View, TouchableOpacity, Image, Button,Text } from 'react-native';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../signIn/signInActions'

import { Avatar, Subheader, COLOR, IconToggle, Icon } from 'react-native-material-design';

const home = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({routeName: 'Home'})
	]
})


const map = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({routeName: 'Map'})
	]
})

class customDrawerContentComponent extends React.Component{

	render() {
				
		return (
		  <View style={styles.container}>
		  	<View style={styles.drawerHeader}>
		  		<Avatar image={<Image source={require('../../../imgs/avatar.png')} size={120} />} />
		  	</View>
		  	<View style={styles.drawerBody}>
			    <TouchableOpacity style={styles.buttonExit} onPress={() => this.props.navigation.dispatch(home)}><Text style={styles.textButtonExit}>Home</Text></TouchableOpacity>
			    <TouchableOpacity style={styles.buttonExit} onPress={() => this.props.logout()}><Text style={styles.textButtonExit}>Sair</Text></TouchableOpacity>
				</View>
		  </View>
		);
	}	

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonExit: {
  	margin: 15,
  	justifyContent: 'flex-end'
  },

	textButtonExit: {
  	fontWeight: 'bold',
  	color: 'black'
		
	},
	
	drawerHeader: {
		flex: 1,
		backgroundColor: '#00ff00',
		justifyContent: 'center',
		alignItems: 'center'
	},

	drawerBody: {
		flex: 2
	},

	
	titleDrawerHeader: {
		alignSelf: 'center'
	}



});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(null, mapDispatchToProps)(customDrawerContentComponent)