import { AsyncStorage } from 'react-native'
import { Consts } from '../consts'
const INITIAL_STATE = { user: {} }

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'LOGIN':
			AsyncStorage.setItem(Consts.keyUser, JSON.stringify(action.payload))
			return { ...state, email: '', password: '', user: action.payload}
		case 'REGISTER':
			AsyncStorage.setItem(Consts.keyUser, JSON.stringify(action.payload))
			return { ...state, user: action.payload}
		case 'LOGOUT':
			AsyncStorage.removeItem(Consts.keyUser)
			return { ...state, user: {}}
		case 'CHANGE_INITIAL_VALUE':
			return {...state, user: action.payload}
		default:
			return state
	}
}