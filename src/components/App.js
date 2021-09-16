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

    return(
        <div className="ui form two column centered grid container">
            <div className="two column centered row segment">
                <form className="ui grid column">
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
            <div className="column">
                <ToDo 
                    listItems={todos} 
                    deleteItem={deleteItem}
                />
            </div>
        </div>
        );
    }

export default App;
