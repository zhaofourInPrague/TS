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
type CombinedState = {
    [K in keyof ReducersType]: ReturnType<ReducersType[K]>
}
export {CounterState, TodosState, CombinedState}
const combinedReducer = combineReducers(reducers);
export default combinedReducer;