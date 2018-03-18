import React from 'react';
import { showMsg } from "./actions";
import { connect } from 'react-redux';

export const B = (props) => (
    <button onClick={props.showMsg}>B</button>
)

let mapDispatchToProps = (dispatch) => ({
    showMsg: () => dispatch(showMsg('msgY'))
})

export default connect(null, mapDispatchToProps)(B)