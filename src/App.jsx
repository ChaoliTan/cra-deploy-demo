import React, { Component } from 'react'

import Sum from './containers/Sum/Sum' // 引入Sum的容器组件
import Person from './containers/Person/Person' /* 引入Person的容器组件 */

export default class App extends Component {
    render() {
        return (
            <div>
                <Sum />
                <hr />
                <Person />
            </div>
        )
    }
}
