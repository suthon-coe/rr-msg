import React from 'react';
import { connect } from 'react-redux';
import { hideAll } from './actions';

const HideAll = (props) => (
    <button onClick={props.hideAll}>Hide All</button>
)

let mapDispatchToProps = (dispatch) => ({
    hideAll: () => dispatch(hideAll())
})

export default connect(null, mapDispatchToProps)(HideAll)