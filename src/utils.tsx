import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

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
// export type DefaultProps = Partial<typeof defaultProps>;
// 疑问: 暂时不明为什么不用Partial
export type DefaultProps = typeof defaultProps;
/*
高阶组件: 作用是增加额外的默认属性
1. Props是DefaultProps的子类型
2. type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
3. 


疑问:
1. <P extends 为什么写在这里, 代表什么?
2. P到底干什么的, 谁传的
*/
export const withDefaultProps = <P extends DefaultProps>(
    OldComponent: React.ComponentType<P>) => {
    /*
    1. Omit 忽略P 中的 DefaultProps
       1.  NewC接受的属性就不需要defualt了, 外层已经给了
    */
    type OwnProps = Omit<P, keyof DefaultProps>;
    
    class NewComponent extends React.Component<OwnProps> {
        render(){
            /*
            1. 疑问: 为啥要 as P
            */
            const props = {...defaultProps, ...this.props} as P;
            return <OldComponent {...props}/>
        }
    }
    // return NewComponent;
    /*
    官方标准
    1. 将OldComponent的静态属性拷贝到NewComponent
    2. 具体参照 分析/
    */
   return hoistNonReactStatics(NewComponent, OldComponent);
}