import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise  from 'redux-promise'

import reducers from './reducers'

import Routes from './routes/routes'
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
class App extends Component{
	render() {
		return(
			<Provider store={store}>
				<Routes />
			</Provider>
		)
	}
}

export default App