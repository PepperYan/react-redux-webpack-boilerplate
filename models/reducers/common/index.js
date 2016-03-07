import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import undoable,{distinctState} from 'redux-undo'
import * as reducs from '../'

reducs.routing = routeReducer;
/*
大多数情况下不需要修改这个文件
*/
const combine = combineReducers(reducs);

export default combine
