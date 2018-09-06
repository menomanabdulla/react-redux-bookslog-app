import {combineReducers} from 'redux'
import BookReducers from './reducer_books'
//console.log(BookReducers)
const rootReducer = combineReducers({
    books: BookReducers
})

export default rootReducer