import React, { Component } from 'react'
import { nanoid } from "nanoid";
import { connect } from 'react-redux'

import { addPerson } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        const { persons } = this.props
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.sum}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="enter name" />&nbsp;
                <input ref={c => this.ageNode = c} type="text" placeholder="enter age" />
                <button onClick={this.addPerson}>Add</button>
                <ul>
                    {
                        persons.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ persons: state.persons, sum: state.total }),
    {
        addPerson: addPerson
    }
)(Person)