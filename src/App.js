import React, {Component} from 'react';
import TodoForm from "./components/TodoForm";

class App extends Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            todoValue: "",
            todoData: [{task: "Finish this assignment", id: Date.now(), completed: false}],
        }
    }
    //change handlers
    handleChange = e => {
        console.log("Event value: ", e.target.value);
        this.setState({[this.state.todoValue] : e.target.value});
    }
    //add and clear all handlers
    addTodo = (e, todoTask) =>{
        e.preventDefault();
        console.log("todoTask: ", e.target.value);
        const newTodoItem = {task: todoTask, id: Date.now(), completed: false}
        this.setState({todoData: [...this.state.todoData, newTodoItem]});
        console.log(this.state.todoData);
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoForm handleChange={this.handleChange} addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App;
