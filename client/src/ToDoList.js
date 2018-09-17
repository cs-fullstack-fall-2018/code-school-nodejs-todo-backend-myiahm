import React, {Component} from 'react';



class TodoList extends Component {

    forEachItem() {

        var yes = this.props.arr.map(
            EachItem => {
                var state;
                if (EachItem.isDone === true) {
                    state = false
                } else {
                    state = true
                }
                return (

                    <div>
                        <p>{EachItem._id}</p>
                        <p>{EachItem.username}</p>
                        <p>{EachItem.todo}</p>
                        <p>{state.toString()}</p>
                        <button onClick={() => this.props.deletion(EachItem._id)}>Delete</button>
                    </div>

                )
            }
        );
        return yes
    }
    render() {
        //console.log(this.props.arr);
        var stuff = this.forEachItem()
        return (
            <div>
                <h2>{stuff}</h2>
            </div>
        );
    }

}

export default TodoList;
