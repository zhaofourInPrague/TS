import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './component/Todos';
import Counter from './component/Counter';
import store from '@/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <>
                <ul>
                    <li><Link to='/counter'>counter</Link></li>
                    <li><Link to='/todos'>todos</Link></li>
                </ul>
                <Routes>
                    <Route path='/counter' element={<Counter/>}/>
                    <Route path='/todos' element={<Todos />}/>
                </Routes>
            </>
        </Router>
    </Provider>,
    document.getElementById('root')
)