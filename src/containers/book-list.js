import React,{Component}  from 'react'

import {connect} from 'react-redux'

class Booklist extends Component{
    constructor(props) {
        super(props);
        this.renderlist = this.renderlist.bind(this);
      }
    renderlist(){
        console.log(this.props.books)
        return this.props.books.map(book =>{
            return(
                <li key={book.title} className="list-group-item">
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

export default connect(mapStateToProps)(Booklist)