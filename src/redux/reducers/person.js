import { ADDPERSON } from '../constant'
import { nanoid } from 'nanoid'

const initState = [{ id: nanoid(), name: 'tom', age: 18 }]

export default function personReducer(preState = initState, action) {
    const { type, data } = action
    // console.log('person...reducer')
    switch (type) {
        case ADDPERSON:
            return [...preState, data]
        default:
            return preState;
    }

}