import { combineReducers } from 'redux'
import { RoutesApp } from './routes'
import { NavigationActions } from 'react-navigation'

const firstAction = RoutesApp.router.getActionForPathAndParams('Home')

const INITIAL_STATE = RoutesApp.router.getStateForAction(
	firstAction
)

const login = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({routeName: 'Home'})
	]
})

// const logout = NavigationActions.reset({
// 	index: 0,
// 	actions: [
// 		NavigationActions.navigate({routeName: 'SignIn'})
// 	]
// })

export default(state = INITIAL_STATE,action) => {
	let nextState
	switch(action.type){
		case 'LOGIN':
			nextState = RoutesApp.router.getStateForAction(
				login,
				state
			)
			break
		case 'LOGOUT':
			nextState = RoutesApp.router.getStateForAction(
				logout,
				state
			)
			break
		default:
			nextState = RoutesApp.router.getStateForAction(action, state)
			break
	}

	return nextState || state
}