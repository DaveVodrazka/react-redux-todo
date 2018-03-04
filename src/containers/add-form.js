import React from 'react'
import {connect} from 'react-redux'

import {addTodo, changeSorting, checkInput} from '../actions/actions'

class AddForm extends React.Component {
  render() {
    return(
      <form className="add-form"
      onSubmit={(e) =>{
        e.preventDefault()
        if (checkInput(this.refs.userInput.value)) {
          this.props.add(this.refs.userInput.value)
          this.props.sort(this.props.currentSort)
          this.refs.userInput.value=''
          this.refs.userInput.placeholder='Nový úkol'
        } else {
          this.refs.userInput.value=''
          this.refs.userInput.placeholder='Neplatná vstup'
        }
      }}>
        <input type="text" ref="userInput" placeholder="Nový úkol" autoFocus></input>
        <button type="submit">Přidat</button>
      </form>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
