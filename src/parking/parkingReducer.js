const INITIAL_VALUE = { states: [], cities: [], city: null }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'STATES':
			return {...state, states: action.payload}
		case 'CITIES':
			return {...state, cities: action.payload}
		case 'CHANGE_CITY':
			return {...state, city: action.payload}
		default: 
			return state

	}
}