import {combineReducers} from 'redux'
import { FETCH} from './reducers'
export const rootReducer= combineReducers({
  Todos:FETCH
});