// UI 组件的分离

import React, {Component} from 'react';
import  {Input,Button,List} from 'antd';

class TodoListUI extends Component {
    render() {
        return(
            <div>
                <div style={{marginLeft:'20px'}}>
                <Input value={this.props.inputValue} 
                placeholder="re info" 
                style={{width:'300px',marginTop:'20px'}} 
                onChange={this.props.handleInputChange}
                />
                <Button 
                style={{marginLeft:'15px'}}
                onClick={this.props.handleBtnClick}
                >提交
                </Button>
                <List
                style={{marginTop:'20px',width:'300px'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item,index) => (
                <List.Item 
                // onClick={this.state.handleItemDelet.bind(this,index)}
                onClick={(index) => {this.props.handleItemDelet(index)}}
                >{item}
                </List.Item>)}
                />
                </div>
            </div>
        )
    }
} 

export default TodoListUI;