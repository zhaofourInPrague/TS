// import React, {ReactNode}from 'react';
import React, {PropsWithChildren}from 'react';
import {connect} from 'react-redux';
import {CombinedState, CounterState} from '@/store/reducers';
import * as actions from '@/store/actions/counter';
// import {add, minus} from '@/store/actions/counter';
// interface Props {
//     number: number
// }

/*
加装了connect后的props, 就是action函数和CounterState整合
*/
// const actions = {add, minus};
type Props = CounterState & typeof actions;

type ComponentProps = PropsWithChildren<Props>;

class Counter extends React.Component<ComponentProps>{
    render(){
        const {count, add, minus, children} = this.props;
        console.log(children);
        return (
            <div>
                <p>{count}</p>
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state:CombinedState):CounterState => state.counter;
export default connect(
    mapStateToProps,
    // {add, minus}
    actions
)(Counter);

/*
type PropsWithChildren<Props> = Readonly<Props> & Readonly<{
    children?: ReactNode 字符串 null ...
}>
type ComponentProps = PropsWithChildren<Props>;
*/