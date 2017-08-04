import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import navReducer from './routes/navReducer'
import signInReducer from './signIn/signInReducer'

const rootReducers = combineReducers({
	form: formReducer,
	nav: navReducer,
	user: signInReducer
})

export default rootReducers