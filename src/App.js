import React, {Component,Fragment} from 'react';
import './style2.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true
        }
    this.handleToggole = this.handleToggole.bind(this)
    }

    render() {
        return (
        <Fragment>
            <CSSTransition
                in = {this.state.show}
                timeout = {1000}
                classNames ='fade'
                unmountOnExit //删除节点
                onEnter = {(el) => {el.style.color='blue'}} // 通过钩子函数改变样式，参数el为节点
                appear = {true} // 首次展示也应用
            >
            <div>hello world</div>
            </CSSTransition>
            {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> //根据状态数据决定类名 */}
            <button onClick={this.handleToggole}>toggole</button>
        </Fragment>
        )
    }
    
    handleToggole() {
        this.setState({
            show: this.state.show ? false : true // 若this.state.show为true则false，反之则true。
        })
    }
    // 通过点击按钮时事件，改变状态数据，标签的类名再根据状态数据的改变而改变，
}


export default App;