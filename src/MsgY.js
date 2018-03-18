import React from 'react';
import { createMsg } from "./hocs";

const MsgY = ({visible}) => (
    <div style={{visibility : visible ? 'visible' : 'hidden'}}>I'm Y</div>
)

export default createMsg('msgY')(MsgY)