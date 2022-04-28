// import React, {ReactNode}from 'react';
import React, {PropsWithChildren}from 'react';
interface Props {
    number: number
}
type ComponentProps = PropsWithChildren<Props>;

export default class Counter extends React.Component<ComponentProps>{
    render(){
        const {number, children} = this.props;
        console.log(children);
        return (
            <div>
                <p>{number}</p>
            </div>
        )
    }
}

/*
type PropsWithChildren<Props> = Readonly<Props> & Readonly<{
    children?: ReactNode 字符串 null ...
}>
type ComponentProps = PropsWithChildren<Props>;
*/