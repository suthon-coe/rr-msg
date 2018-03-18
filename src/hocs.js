import React from 'react';
import { connect } from 'react-redux'

export const createMsg = id => BaseComponent => {
    let mapStateToProps = (state) => ({ visible: state[id]})
    return connect(mapStateToProps)(BaseComponent)
}