const defaultState = {
    inputValue: '',
    list: []
}

// reducer 可以接收state， 但是不能修改state，所以需要拷贝后修改
export  default (state = defaultState, action ) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state)); // 对原数据做个一次深拷贝
        newState.inputValue = action.value //接收cation传过来的值
        return newState //返回新的数据，返回给store
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);  // 将inputValue 添加到 list 
        newState.inputValue = ''; //清空inpuValue
        return newState;  //将newState 返回给store

    }
    if (action.type === 'delete_todo_ietm') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);  // 删除下标为index，一项
        newState.inputValue = ''; //清空inpuValue
        return newState;  //将newState 返回给store

    }
    console.log(action,state)
    return state; 
}

// state 为原数据，action为新数据