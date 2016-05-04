import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers/common'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import DevTools from '../../containers/DevTools';
import {api} from '../../middlewares/api/index'

// //叠加一些中间件
let createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    applyMiddleware(api),
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

// export default function configureStore(rootReducer, initialState) {
//   rootReducer = combineReducers({
//     ...rootReducer,
//     routing
//   })
//
//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(thunk, createLogger(),api),
//       DevTools.instrument()
//     )
//   )
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default
//       store.replaceReducer(nextRootReducer)
//     })
//   }
//
//   return store
// }
