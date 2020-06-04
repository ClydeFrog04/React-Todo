import React, {Component} from "react";


class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo">
                <p
                    className={this.props.todo.completed ? "completed" : ""}
                    onClick={() => this.props.toggleTodo(this.props.todo.id)}
                >{this.props.todo.task}</p>
            </div>
        );
    }
}

export default Todo;