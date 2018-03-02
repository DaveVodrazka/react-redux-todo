import React from 'react'
import {connect} from 'react-redux'

import {addTodo, changeSorting} from '../actions/actions'

class AddForm extends React.Component {
  render() {
    return(
      <form onSubmit={(e) =>{
        e.preventDefault()
        this.props.add(this.refs.userInput.value)
        this.props.sort(this.props.currentSort)
        this.refs.userInput.value=''
      }}>
        <input type="text" ref="userInput" placeholder="Enter task" autoFocus></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSort: state.SortReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => { dispatch(addTodo(text)) },
    sort: (currentSort) => { dispatch(changeSorting(currentSort)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
