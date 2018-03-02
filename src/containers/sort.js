import React from 'react'
import {connect} from 'react-redux'

import {changeSorting} from '../actions/actions'

class Sort extends React.Component {
  render() {
    return(
      <form>
        <select onChange={(e) => this.props.change(e.target.value)}>
          <option value="ascend">Vzestupně</option>
          <option value="descend">Sestupně</option>
          <option value="alpha">Abecedně</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    activeSorting: state.SortReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    change: (text) => { dispatch(changeSorting(text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
