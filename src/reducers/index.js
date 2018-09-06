import {combineReducers} from 'redux'
import BookReducers from './reducer_books'
import ActiveBook from './reducer_active_books'
const rootReducer = combineReducers({
    books : BookReducers,
    activeBook : ActiveBook
})

export default rootReducer