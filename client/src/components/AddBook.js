import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'



class AddBook extends Component {
constructor(props){
    super(props)
    this.state = {
        name: '',
        genre: '',
        authorId: ''
    }
}
displayAuthors(){
    let data = this.props.getAuthorsQuery
    if(data.loading){
        return (<option disabled>Loading Authors..</option>
               )
    } else {
        return data.authors.map(author => {
            return(<option key={author.id} value={author.id}>{author.name}</option>
                  )
        })
    }
}
submitForm(ev){
    ev.preventDefault()
    this.props.addBookMutation({
        variables: {
            name: this.state.name,
            genre: this.state.genre,
            authorId: this.state.authorId
        },
        refetchQueries: [{ query: getBooksQuery}]
    })
    
}
render() {
      return (
        <form id="add-book" onSubmit={this.submitForm.bind(this)}>
          
          <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={ ev => this.setState({name: ev.target.value})}/>
          </div>
          
          <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={ ev => this.setState({genre: ev.target.value})}/>
          </div>
          
          <div className="field">
            <label>Author:</label>
            <select onChange={ ev => this.setState({authorId: ev.target.value})}>
                <option disabled selected>Select Author</option>
                {this.displayAuthors()}
            </select>
          </div>
          
          <button>+</button>
          
        </form>
      )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook)
