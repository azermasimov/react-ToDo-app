import React from 'react';
import ToDo from './ToDo';

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
            list: [...this.state.list],
        });
    }

    render() {
        return(
            <div>
                <form>
                    <input placeholder="Type your task here!" onChange={(e) => this.setState({ willPushToList: e.target.value})} />
                    <button onClick={this.handleInput} >Add</button>
                </form>
                <ToDo listItems={this.state.list} />
            </div>
        );
    }
}

export default App;