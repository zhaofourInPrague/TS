/*
引入的是类型 type
*/
import React, { FunctionComponent } from 'react';
import {Todo} from '@/models';


interface Props {
    todo: Todo
}

/*
定义样式对象
*/
const todoItemStyle:React.CSSProperties = {
    // color2:'red', 就报错为了合法
    color:'red',
    backgroundColor: 'green'
}

/*
定义函数组件
*/
const TodoItem: React.FC<Props> = (props: Props) => (
    <li style={todoItemStyle}>{props.todo.text}</li>
)
TodoItem.defaultProps = {};

export default TodoItem;


/*
type FC<P = {}> = FunctionComponent<P>;
interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    defaultProps?: Partial<P> | undefined;
}
*/


