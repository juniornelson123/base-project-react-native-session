import axios from 'axios'
import { Consts } from '../consts'

export function changeValue(user){
	console.log(user)
	return {
		type: 'CHANGE_INITIAL_VALUE',
		payload: user
	}
}