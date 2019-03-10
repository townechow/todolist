import React, {Component, Fragment} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); // 绑定this指向，这样写节约性能
    }

    render() {
        const content = this.props.content; {/**接收父组件传过来的数据item */}
        
        return (
            <Fragment>
               <li
               onClick= {this.handleClick}
               >
               {content}
               </li> 
               {console.log('返回li')}
            </Fragment>
        )
    }
    
    // 方法：点击事件，接受父组件的删除方法和参数。
    handleClick() {
        const deleteItem = this.props.deleteItem;
        const index = this.props.index;  // 同时接收了父组件传过来的deleteItem方法和index数据
        deleteItem(index); 
        // this.props.deleteItem(this.props.index)
        console.log('删除方法')

    }
}

export default TodoItem;