// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from "react";
import Todo from "./Todo";


class TodoList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todoList">
                {this.props.todoData.map(todo => <Todo key={todo.id} toggleTodo={this.props.toggleTodo} todo={todo}/>)}
            </div>
        );
    }
}

export default TodoList;