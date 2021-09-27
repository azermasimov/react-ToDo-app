import React, { Fragment, useState } from 'react';
import ToDo from './ToDo';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const App = (props) => {
    const handleInput = (e) => {
        e.preventDefault();
        let input = e.target.value;
        props.dispatch(addTodo(input));
    }

    return(
        <Fragment>
            <div className="ui form two column centered grid container">
                <h1 style={{margin: 40, fontSize: 40}}>Todo App</h1>
                <div className="two column centered row segment">
                    <form className="ui form grid column" onSubmit={handleInput}>
                        <input
                            type="text"
                            className="left floated fourteen wide column" 
                            placeholder="Type your task here!" 
                        />
                        <div className="right floated two wide column">
                            <i className="plus square outline icon" onClick={handleInput} ></i>
                        </div>
                    </form>
                </div>
                <div className="ui grid column">
                    <ToDo />
                    {/* <button onClick={clearAll} className="ui button right floated">Clear All</button> */}
                </div>
            </div>
        </Fragment>
        );
    }

export default connect()(App);