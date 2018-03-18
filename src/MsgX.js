import React from 'react';
import { createMsg } from "./hocs";

const MsgX = ({visible}) => (
    <div style={{visibility : visible ? 'visible' : 'hidden'}}>I'm X</div>
)

export default createMsg('msgX')(MsgX)