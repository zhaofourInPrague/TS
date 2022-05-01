import {ADD, MINIS} from '@/action-types';

export function add(){
    return {type: ADD};
}

export function minus(){
    return {type: MINIS};
}


/*
ReturnType: 获取函数类型的返回值类型, 内置的
*/
export type CounterAction = ReturnType<typeof add> | ReturnType<typeof minus>;
