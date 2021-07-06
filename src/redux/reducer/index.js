import { combineReducers } from 'redux'
import { globalReducer } from './global'
import { contactReducer } from './contact'

const reducer = combineReducers({
  globalReducer,
  contactReducer
})

export default reducer