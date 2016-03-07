import createReducer from './common/createReducer'
import {NEWCOMPONENTLIST} from '../actions/newcomponent'

const newcomponent = createReducer([], {
  [NEWCOMPONENTLIST]( state, action){
    return [...action.list]
  }
})


export default newcomponent
