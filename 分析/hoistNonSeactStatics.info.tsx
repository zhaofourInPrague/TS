import React from 'react';
// import hoistNonReactStatics from 'hoist-non-react-statics';

interface Props {}
interface State{}

/*
实际完全实现hoistNonReactStatics需要过滤REACT_STATICS, 因为react自带的static属性不必拷贝
*/
const REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
}

/*
N extends React.ComponentType<any>
N可能更详细, 不能直接用React.ComponentType<any>
*/
function hoistNonReactStatics<N extends React.ComponentType<any>, O extends React.ComponentType<any>>(
    New: N, 
    Old: O) : N & O{
    const keys = Object.getOwnPropertyNames(Old);
    for(const item of keys) {
        if(!REACT_STATICS[item]){
            const descriptor = Object.getOwnPropertyDescriptor(Old, item);
            Object.defineProperty(New, item ,descriptor);
        } 
    }
    return New as N & O;
}

class Old extends React.Component<Props, State> {
    static age1: number = 10;
}

class New extends React.Component<Props, State> {
    static age2: number = 20;
}
/*
typeof New - New
两者完全不一样:
1. 放在<>中是类型, typeof New 才是类型
*/
const N = hoistNonReactStatics<typeof New, typeof Old>(New, Old);
N.age1;
N.age2;