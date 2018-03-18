import React, { Component } from 'react';

import A from './A'
import B from './B'
import MsgX from './MsgX'
import MsgY from './MsgY'
import HideAll from './HideAll'

class App extends Component {
  
  render() {
    return (
      <div>
        <A/>
        <B/>
        <MsgX/>
        <MsgY/>
        <HideAll/>
      </div>
    );
  }
}

export default App;
