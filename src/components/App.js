import React from 'react';
import ToDo from './ToDo';
import './App.css';

class App extends React.Component {
    state = {
        willPushToList: "",     // push to list arr
        list: [],
    }

    handleInput = (e) => {
        // console.log(this.state.list);
        e.preventDefault();
        const list = [...this.state.list];
        list.push(this.state.willPushToList);

        console.log(list);

        this.setState({
            willPushToList: "",
            list,
        });
    }

    render() {
        return(
            <div className="ui container">
                    <div className="ui form">
                        <form className="ui input">
                            <input
                                type="text"
                                className="" 
                                placeholder="Type your task here!" 
                                value={this.state.willPushToList} 
                                onChange={(e) => this.setState({ willPushToList: e.target.value})} 
                            />
                            <button className="ui button" onClick={this.handleInput} >
                                Add
                            </button>
                        </form>
                    </div>
                    <div className="">
                        <ToDo listItems={this.state.list} />
                    </div>
            </div>
        );
    }
}

export default App;