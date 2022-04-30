/*
引入的是类型 type
*/
import React, { FunctionComponent } from 'react';
import {Todo} from '@/models';

const defaultProps = {
    settings: {
        maxLength: 6,
        placeholder: '请输入...'
    }
}
/*
Partial将defaultProps转换的类型属性变成可选项
可变只转第一层 settings ?:{...}
*/
export type DefaultProps = Partial<typeof defaultProps>;

interface OwnProps {
    addTodo: (todo: Todo) => void
}
/*
用户传过来的属性 联合& 默认属性 -> Props
*/
type Props = OwnProps & DefaultProps;

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

    // 用于默认属性, 给下方的input使用
    // static defaultProps:DefaultProps = defaultProps;
    static defaultProps: Required<DefaultProps> = defaultProps;
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
        // 与static中reuqired 配合这里的 as Props & Required<DefaultProps>
        // 实现 settings.maxLength不报错
        const {settings} = this.props as Props & Required<DefaultProps>;
        return (
            <form onSubmit={handleSubmit}>
                <input maxLength={settings.maxLength} placeholder={settings.placeholder}/>
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