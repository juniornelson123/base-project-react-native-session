import axios from 'axios'
import { Consts } from '../consts'

export function saveParking(values){
	return (dispatch, getState) => {
		values.parking['user_id'] =  getState().user.user.id
		axios.post(`${Consts.api_host}/api/parkings.json`, {parking: values.parking}, {headers: {'access-token': getState().user.user.token}}).then(parking => {
			dispatch([
				{type: "SAVE_PARKING"}
			])
		})
		.catch(error => {
			console.log(error)
		})
	}
}

export function getStates(){
	return dispatch => {

		axios.get(`${Consts.api_host}/api/states.json`).then(states => {
			dispatch([
				{type: 'STATES', payload: states.data.states}
			])
		})
		.catch(error => {
			console.log(error)
		})
	}
}

export function changeCity(id){
	return { type: "CHANGE_CITY", payload: id}
}



export function getCities(state_id){
	return dispatch => {

		axios.get(`${Consts.api_host}/api/cities/${state_id}.json`).then(cities => {
			dispatch([
				{type: 'CITIES', payload: cities.data.cities}
			])
		})
		.catch(error => {
			console.log(error)
		})
	}
}