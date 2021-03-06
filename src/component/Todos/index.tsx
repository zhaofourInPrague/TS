import React from 'react';
import {Todo} from '@/models';
import TodoInput from './TodoInput';
import TodoItem from './Todoitem';
import {connect} from 'react-redux';
import {CombinedState, TodosState} from '@/store/reducers';
import * as actions from '@/store/actions/todos';

type Props = TodosState & typeof actions;

interface State {}

class Todos extends React.Component<Props, State> {

    state = {
        todos: [] as Array<Todo>
        // todos: [] 直接这样写 todo.id会报错
        // todos: <Array<Todo>>[] -- bug, ts与jsx矛盾
    }

    addTodo = (todo: Todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render(){
        return (
            <div>
                <TodoInput addTodo={this.addTodo}/>
                <ul style = {{width: 200}}>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem todo={todo} key={todo.id}/>
                        ))
                    }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state: CombinedState): TodosState => state.todos;
export default connect(mapStateToProps, actions)(Todos)
