import React, {Component} from 'react'

class ToDoList extends Component {
    forEachFunction() {
        this.props.arr.map(
            eachItem => {

        return (
            <div>
                <p>{eachItem.username}</p>
                <p>{eachItem.todo}</p>
                <p>{eachItem.isDone}</p>
                <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                <hr/>
            </div>

        )
    }
        )
}

render()
{


    return (
        <div>
            <h2> {this.forEachFunction}</h2>
        </div>
    );



export default ToDoList