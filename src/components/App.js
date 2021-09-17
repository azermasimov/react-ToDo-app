import React, { useState } from 'react';
import ToDo from './ToDo';
import './App.css';

const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInput = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }

    const deleteItem = (index) => {
        const deleted = [...todos];
        setTodos(deleted.filter((item) => deleted.indexOf(item) !== index));
    }

    const clearAll = () => {
        setTodos([]);
    }

    return(
        <div className="ui form two column centered grid container">
            <div className="two column centered row segment">
                <form className="ui form grid column">
                    <input
                        type="text"
                        className="left floated fourteen wide column" 
                        placeholder="Type your task here!" 
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)} 
                    />
                    <div className="right floated two wide column">
                        <i className="plus square outline icon" onClick={handleInput} ></i>
                    </div>
                </form>
            </div>
            <div className="ui grid column">
                <ToDo 
                    listItems={todos} 
                    deleteItem={deleteItem}
                />
                <div>You have <span className="num-span">{[...todos].length}</span> task(s) To Do</div>
                <button onClick={clearAll} className="ui button right floated">Clear All</button>
            </div>
        </div>
        );
    }

export default App;