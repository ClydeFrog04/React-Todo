import React, {Component} from "react";


class TodoForm extends Component {
    constructor(props) {
        super(props);
    }

    //define form submit
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(e);
    }

    render() {
        return (
            <div className="todoForm">
                <form onSubmit={this.submitTodo}>
                    <label htmlFor="todoItem">
                        <input
                            type="text"
                            value={this.props.todoValue} /*todo: create a value*/
                            name="todoItem"
                            onChange={this.props.handleChange} /*todo: create a handle change*/
                            placeholder="Todo..."
                        />
                    </label>
                    <button>Add Todo</button>
                    <button onClick={this.props.clearCompleted}>Clear Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;