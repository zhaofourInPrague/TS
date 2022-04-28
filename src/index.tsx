import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './component/Todos';
import Counter from './component/Counter';

ReactDOM.render(
    <>
        <Counter number = {0}/>
        <hr/>
        <Todos />
    </>,
    document.getElementById('root')
)