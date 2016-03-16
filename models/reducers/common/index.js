import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import undoable,{distinctState} from 'redux-undo'
import * as reducs from '../'
import { routerReducer } from 'react-router-redux'

reducs.routing = routeReducer;
/*
大多数情况下不需要修改这个文件
*/
const combine = combineReducers({
  ...reducs,
  routing: routerReducer
});

export default combine
