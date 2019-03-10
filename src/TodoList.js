import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem.js'
import './style.css' 

class TodoList extends Component {
    constructor(props) {  //构造函数
        super(props);  //调用父类的构造函数
        this.state = {  //定义数据
            inputValue:'',
            list: []
        }

        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);  
    }
    
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">请输入内容</label> {/* 扩大聚焦点击区*/}
                    <input 
                    id="insertArea" 
                    className = 'input'
                    value = {this.state.inputValue} //与状态中的数据绑定
                    onChange={this.handleInputChange} // 事件绑定==>监听改变，执行相应方法，方法需定义,绑定this指向。
                    /> 
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                  { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    
    // 
    getTodoItem(){
       return this.state.list.map((item,index) => {
            return (
                <TodoItem 
                key = {index} 
                content={item} 
                index={index} 
                deleteItem={this.handleItemDelete}
                />
                // 将数据和方法传给子组件。
          ) 
        })
    }

    // 方法：监听改变，将改变的值传入数据inputValue.
    handleInputChange(e) {
    //    console.log(e.target.value)  //获取输入框的值
        const value = e.target.value;
        this.setState(() =>({
            inputValue: value
        })); 
    //     this.setState({
    //       inputValue:e.target.value //用setState()方法将获取到的值传给组件 => 改变组件数据
    //   })
        {console.log('键盘输入')}
    }

    //方法：点击事件，将输入框的值-inputValue传入数据list，并清空输入框。
    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
        // this.setState({
        //     list:[...this.state.list, this.state.inputValue], //参数一展开原有项，参数二将输入值增加到list.
        //     inputValue: ''  //将输入框清空。
        // })

    }
    
    //方法：点击事件，将list 数据做一份拷贝，删除副本下标为index的项，一项，将改变了的list 返回数据。
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list} 
        });
        // // console.log(index);
        // const list = [...this.state.list]; //把数据list做一份拷贝。
        // list.splice(index, 1); // 删除下标为index的内容，一个。

        // this.setState({
        //     list:list
        // }) //将改变了的list传回状态数据


    }
}


export default TodoList;
