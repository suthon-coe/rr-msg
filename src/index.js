import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { handleActions } from 'redux-actions';
import { showMsg, hideAll } from './actions';
import _ from 'lodash';

let reducer = handleActions({
    [showMsg](state, {payload: {id}}){
        return {...state, [id]: true}
    },
    [hideAll](state){
        return _.mapValues(state, v => false)
    }
}, {})
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , 
    document.getElementById('root')
);
