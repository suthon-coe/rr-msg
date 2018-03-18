import React from 'react';
import { showMsg } from "./actions";
import { connect } from 'react-redux';

export const A = (props) => (
    <button onClick={props.showMsg}>A</button>
)

let mapDispatchToProps = (dispatch) => ({
    showMsg: () => dispatch(showMsg('msgX'))
})

export default connect(null, mapDispatchToProps)(A)