import counter, {CounterState} from './counter';
import todos, {TodosState} from './todos';
import {combineReducers} from 'redux';

const reducers = {
    counter,
    todos
}

type ReducersType = typeof reducers;
/*
合并后的状态类型
*/
/*
CombinedState的第一种写法
type CombinedState = {
    [K in keyof ReducersType]: ReturnType<ReducersType[K]>
}
export {CounterState, TodosState, CombinedState}
const combinedReducer = combineReducers(reducers);
*/

// 第二种写法 直接使用整合后的combinedReducer的类型
const combinedReducer = combineReducers(reducers);
type CombinedState = ReturnType<typeof combinedReducer>;
export {CounterState, TodosState, CombinedState}


export default combinedReducer;