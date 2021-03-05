import React, { Component } from 'react'
//引入action
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/sum'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class Sum extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.add(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.minus(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.sum % 2 !== 0) {
            this.props.add(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.addAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>我是Sum组件，下方组件人数为：{this.props.persons.length}</h2>
                <h4>Sum is: {this.props.sum}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>add if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>add async</button>
            </div>
        )
    }
}

//使用connect()()创建并暴露一个Sum的容器组件
export default connect(
    state => ({ sum: state.total, persons: state.persons }),
    {
        add: increment,
        minus: decrement,
        addAsync: incrementAsync
    }
)(Sum)