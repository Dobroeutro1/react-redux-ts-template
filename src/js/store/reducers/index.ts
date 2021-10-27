import { combineReducers } from 'redux'
import { reducer as form } from './form'
import { reducer as preview } from './preview'

export default combineReducers({ form, preview })
