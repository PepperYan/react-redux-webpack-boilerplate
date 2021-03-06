import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//react-router & redux
import { Router} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../models/store/configureStore'
import routes from './routes'
import history from './history'

//加载自定义Store
const store = configureStore()

syncHistoryWithStore(history, store)

const container = document.getElementById('container');
render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  container
)
//<IndexRoute component={App}/>
