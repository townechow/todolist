import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'; 

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); // 绑定this指向，这样写节约性能
    }
    // 判断此子组件的render是否要执行，性能节约。
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
   
    render() {
        const {content} = this.props; {/**接收父组件传过来的数据item */}
        
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

// 限定 子组件接受数据的类型
TodoItem.protoTypes = {
    
    content:PropTypes.String,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;