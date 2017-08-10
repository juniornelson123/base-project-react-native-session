import axios from 'axios'
import { Consts } from '../consts'

export function changeValue(user){
	return {
		type: 'CHANGE_INITIAL_VALUE',
		payload: user
	}

}

export function register(values){
	return dispatch => {
		axios.post(`${Consts.api_host}/api/sign_up`, { user: values }).then(user => {
			dispatch([
				{ type: "REGISTER", payload: user.data }
			])
		})
		.catch(error => {
			alert("Erro ao efetuar cadastro")
		})
	}
}

export function login(values){
	return dispatch => {
		axios.post(`${Consts.api_host}/api/sign_in`, {user: values}).then(user => {
			dispatch([
				{type: 'LOGIN', payload: user.data}
			])
		})
		.catch(error => {
			alert('erro ao efetuar login')
		})
	}
}

export function logout(){
	return{
		type: 'LOGOUT'
	}
}