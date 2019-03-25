
// 利用 antd 模块快速实现后台页面布局

import React ,{Component} from 'react';
import  {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class Antd extends Component {

    render() {
        return (
            <div>
                <div style={{marginLeft:'20px'}}>
                <Input size="large" placeholder="re info" style={{width:'300px',marginTop:'20px'}} />
                <Button style={{marginLeft:'15px'}}>提交</Button>
                <List
                style={{marginTop:'20px',width:'300px'}}
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                </div>
            </div>

        )
    }
}
export default Antd;