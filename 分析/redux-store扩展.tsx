import {createStore, Store, AnyAction} from 'redux';

const reducer = (state:any) => state;
type ExtStore = Store & {age: number};

/*
疑问: 为什么createStore中可以包含age属性
*/
let store: ExtStore = createStore(reducer);

store.age;