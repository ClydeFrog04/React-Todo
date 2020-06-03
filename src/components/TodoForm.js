import React, {Component} from "react";


class TodoForm extends Component{
    constructor(props) {
        super(props);

    }

    //define form submit
    submitTodo = (e) => {
        e.preventDefault();
        console.log("todoValue: ", this.props.todoValue);
        this.props.addTodo(e, this.props.todoValue);
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
                    <button>Clear Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;