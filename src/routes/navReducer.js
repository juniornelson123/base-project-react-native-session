import { combineReducers } from 'redux'
import { RoutesApp, DrawerApp } from './routes'
import { NavigationActions } from 'react-navigation'

const firstAction = DrawerApp.router.getActionForPathAndParams('Splash')

const INITIAL_STATE = DrawerApp.router.getStateForAction(
	firstAction
)

const login = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({routeName: 'Home'})
	]
})

const logout = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({routeName: 'SignIn'})
	]
})

export default(state = INITIAL_STATE,action) => {
	let nextState
	switch(action.type){
		case 'LOGIN':
			nextState = DrawerApp.router.getStateForAction(
				login,
				state
			)
			break
		case 'REGISTER':
			nextState = DrawerApp.router.getStateForAction(
				login,
				state
			)
			break	
		case 'LOGOUT':
			nextState = DrawerApp.router.getStateForAction(
				logout,
				state
			)
			break
		case 'SAVE_PARKING':
			nextState = DrawerApp.router.getStateForAction(
				login,
				state
			)
			break
		default:
			nextState = DrawerApp.router.getStateForAction(action, state)
			break
	}

	return nextState || state
}