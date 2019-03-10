import React, {Component, Fragment} from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); // 绑定this指向，这样写节约性能
    }
    render() {
        return (
            <Fragment>
               <div onClick= {this.handleClick}>
               {this.props.content}</div> {/**接收父组件传过来的数据 */}
            </Fragment>
        )
    }
    handleClick() {
        this.props.deleteItem(this.props.index) // 同时接收了父组件传过来的deleteItem方法和index数据

    }
}

export default TodoItem;