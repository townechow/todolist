/**此文件为第一个app拷贝本版
 * 组件未拆分
 * 代码未优化 
 * 作为后续版本的对比参照*/

import React, { Component, Fragment} from 'react';
import './style.css' 
 
class TodoList extends Component {
    constructor(props) {  //构造函数
        super(props);  //调用父类的构造函数
        this.state = {  //定义数据
            inputValue:'',
            list: []
        }
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
                    onChange={this.handleInputChange.bind(this)} // 事件绑定==>监听改变，执行相应方法，方法需定义,绑定this指向。
                    /> 
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                  {this.state.list.map((item,index) => {
                      return (
                      <li 
                        key ={index} //循环渲染时，需给循环的每一项增加一个唯一key值，此处暂用下标index替代.
                        onClick = {this.handleItemDelete.bind(this,index)} //绑定事件，执行删除项方法,同时将下标index传给方法
                        // dangerouslySetInnerHTML={{__html: item}} {/*不转义输入的标签，如输入<h1>hello<h1>则以标题显示输入的内容*/}   
                      >  
                                       
                        {item}
                      </li>) 
                  })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
    //    console.log(e.target.value)  //获取输入框的值
        this.setState({
          inputValue:e.target.value //用setState()方法将获取到的值传给组件 => 改变组件数据
      })
    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue], //参数一展开原有项，参数二将输入值增加到list.
            inputValue: ''  //将输入框清空。
        })

    }
    handleItemDelete(index) {
        // console.log(index);
        const list = [...this.state.list]; //把数据list做一份拷贝。
        list.splice(index, 1); // 删除下标为index的内容，一个。

        this.setState({
            list:list
        }) //将改变了的list传回状态数据


    }
}


export default TodoList;
