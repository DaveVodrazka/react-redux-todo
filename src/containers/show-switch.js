import React from 'react'
import {connect} from 'react-redux'

import {isActive} from '../actions/actions'

class ShowSwitch extends React.Component {
  render() {
    return(
      <div className="show-buttons-container">
        <button className={isActive("all", this.props.show)} onClick={this.props.all}>Všechny</button>
        <button className={isActive("active", this.props.show)} onClick={this.props.active}>Aktivní</button>
        <button className={isActive("done", this.props.show)} onClick={this.props.done}>Hotové</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.ShowReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    all: () => { dispatch({type: "SET_ALL"}) },
    active: () => { dispatch({type: "SET_ACTIVE"}) },
    done: () => { dispatch({type: "SET_DONE"}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSwitch)
