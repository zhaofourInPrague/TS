import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './component/Todos';
import Counter from './component/Counter';
import store from '@/store';
import {Provider} from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        <Counter/>
        <hr/>
        <Todos />
    </Provider>,
    document.getElementById('root')
)