import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers/common'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../../containers/DevTools';

//叠加一些中间件
let createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    // devTools()
    DevTools.instrument()
)(createStore);

//加载reducers
export default function configureStore(initialState) {
  console.log('reducers count:'+reducers.length)
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/common', () => {
      const nextReducer = require('../reducers/common');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
