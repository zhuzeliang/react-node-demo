import React from 'react'
import ReactDOM from 'react-dom'
import { Route , BrowserRouter, Switch, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './config/axios.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

import './App.css'
import Home from './pages/home.js'
import About from './pages/about.js'
import Login from './pages/login.js'
import Demo from './pages/demo.js'
import AuthRoute from './pages/checkAuth.js'
import Redux from './pages/redux.js'
import Error from './pages/error.js'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
	        <div className="router-page">
	   			<Switch>
	   				<Redirect from="/" to="/login" exact />
			        <Route path="/login" component={ Login }/>
			        <AuthRoute path="/home/:id" component={ Home } />
			        <AuthRoute path="/about"  component={About} />
			        <Route path="/demo" component={ Demo } />
			        <Route path="/redux" component={ Redux } />
			        <Route component={ Error } />
			    </Switch>
	        </div>
	    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker()
