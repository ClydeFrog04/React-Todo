import React, {Component} from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css"

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
        this.setState({todoValue: e.target.value});
    }
    //toggle todo
    toggleTodo = itemId => {
        this.setState({
            todoData: this.state.todoData.map(todoItem => {
                console.log(itemId);
                if (itemId === todoItem.id) return {...todoItem, completed: !todoItem.completed};
                return todoItem;
            })
        });
    }
    //add and clear all handlers
    addTodo = (e) => {
        e.preventDefault();
        const newTodoItem = {task: this.state.todoValue, id: Date.now(), completed: false}
        this.setState({todoData: [...this.state.todoData, newTodoItem]});
        this.setState({todoValue: "LSDKHFOI"});
    }
    clearCompleted = e => {
        e.preventDefault();
        this.setState({
            todoData: this.state.todoData.filter(todoItem => !todoItem.completed)
        });
    }


    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoForm handleChange={this.handleChange} addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
                <TodoList toggleTodo={this.toggleTodo} todoData={this.state.todoData}/>
            </div>
        );
    }
}

export default App;
