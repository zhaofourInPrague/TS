/*
引入的是类型 type
*/
import React, { FunctionComponent } from 'react';
import {Todo} from '@/models';

interface Props {
    addTodo: (todo: Todo) => void
}
interface State {
    text:string
}
// interface SS {
//     text: string
// }
/*
interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
p: props
s: state
ss: 给getSnapshotBeforeUpdate/didupdate的
*/
let id = 0;
export default class TodoInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {text: ''}
    }

    handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let text = this.state.text.trim();
        if(!text) return;
        this.props.addTodo({id: id++, text});
        this.setState({
            text: ''
        })
    }

    public render(){
        const {text} = this.state;
        const {handleChange, handleSubmit} = this;
        return (
            <form onSubmit={handleSubmit}>
                <input value = {text} onChange={handleChange}/>
                {/* <button type="submit">添加</button> */}
                <input type='submit' value='添加'/>
            </form>
        )
    }

    /*
    // 不重要
    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): SS {
        return {text: 'ss'}
    }
    */
    
}