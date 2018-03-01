import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions/actions'

class AddForm extends React.Component {
  render() {
    return(
      <form onSubmit={(e) =>{
        e.preventDefault()
        this.props.add(this.refs.userInput.value)
        this.refs.userInput.value=''
      }}>
        <input type="text" ref="userInput" placeholder="Enter task" autoFocus></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => { dispatch(addTodo(text)) }
  }
}

export default connect(null, mapDispatchToProps)(AddForm);
