import {ADD_TODO} from '@/action-types';
import {Todo} from '@/models';

export function addTodo(todo: Todo){
    return {type: ADD_TODO, payload: todo};
}



/*
ReturnType: 获取函数类型的返回值类型, 内置的
*/
export type TodosAction = ReturnType<typeof addTodo>;
