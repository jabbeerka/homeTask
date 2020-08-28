import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import CounterContainer from './components/CounterContainer';
import store from './bll/store';


ReactDom.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>, document.getElementById('root')
);

