import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import navReducer from './routes/navReducer'

const rootReducers = combineReducers({
	form: formReducer,
	nav: navReducer
})

export default rootReducers