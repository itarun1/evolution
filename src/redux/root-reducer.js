import {combineReducers} from 'redux'
import userReducers from './reducer'

const rootReducer=combineReducers({
    data: userReducers
})
export default rootReducer