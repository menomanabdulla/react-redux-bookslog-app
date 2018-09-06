import React,{Component}  from 'react'

import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class Booklist extends Component{
    constructor(props) {
        super(props);
        this.renderlist = this.renderlist.bind(this);
      }
    renderlist(){
        return this.props.books.map(book =>{
            return(
                <li onClick={()=> this.props.selectBook(book)} key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderlist()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return{
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    //Whenever selectbook is called.the result should  be passed 
    //to all of our reducers
    return bindActionCreators({
        selectBook,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Booklist)