/* 该文件用于汇总所有的reducer */
//引入createStore，专门用于创建redux中最为核心的store对象
import { combineReducers } from 'redux'
//引入为Sum组件服务的reducer
import sumReducer from './sum'
//引入为Perosn组件服务的reducer
import personReducer from './person'

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
    total: sumReducer,
    persons: personReducer
})