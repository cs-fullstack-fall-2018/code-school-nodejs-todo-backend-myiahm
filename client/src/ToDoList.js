import React, {Component} from 'react'

class ToDoList extends Component{
    render(){
        return(
            <div>

                <h2>{this.props.arr[3].username} has to {this.props.arr[3].todo} it is {this.props.arr[3].isDone}</h2>
            </div>
        );
    }
}

export default ToDoList;