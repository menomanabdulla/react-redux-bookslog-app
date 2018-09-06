import {combineReducers} from 'redux'
import BookReducers from './reducer_books'

const rootReducer = combineReducers({
    book: BookReducers
})

export default rootReducer