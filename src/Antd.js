
// 利用 antd 模块快速实现后台页面布局

import React ,{Component} from 'react';
import TodoListUI from './TodoListUI'; 
import 'antd/dist/antd.css';
import store from './store/index.js'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
// const data = [
//     'Racing car sprays burning fuel into crowd.'];

class Antd extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelet = this.handleItemDelet.bind(this);
        

        store.subscribe(this.handleStoreChange); // 订阅strore 的改变，然后执行方法

    }

    render() {
        return (
            <TodoListUI
            inputValue = {this.state.inputValue} // 通过属性将值传给子组件
            list = {this.state.list}
            handleInputChange ={this.handleInputChange} // 通过属性将方法传给子组件
            handleBtnClick = {this.handleBtnClick} 
            handleItemDelet = {this.handleItemDelet}
            />
        )
    }

    handleInputChange(e){
        // const action = {             // 创建action对象
        //     type:CHANGE_INPUT_VALUE, // type字段，确定action类型，每个action必须有。
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value); // 通过调用函数创建action函数
        store.dispatch(action); //将action传给store
        console.log('onchange事件，输入框的值经由action带话给reducer 传给store')
    }
    handleStoreChange(){
        this.setState(store.getState()); // 获取store中的数据并传给状态数据state
        console.log('监听store事件，获取store中的数据并传给组件state')
    }
    handleBtnClick(){
        // const action = {
        //     type: ADD_TODO_ITEM  //创建一个action对象
        // }
        const action = getAddItemAction();
        store.dispatch(action);  // 将action对象传给store
        console.log('onclick事件增加，action带话给reducer更改store数据')
    } 
    handleItemDelet(index) {
        //const action = {
        //    type: DELETE_TODO_ITEM,
        //    index //
        //}
        const action = getDeleteItemAction(index);
        store.dispatch(action);
        console.log('传递下标 删除项')
    }
}
export default Antd;