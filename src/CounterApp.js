import * as React from 'react';
import { join } from 'path';

export default class CounterApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index : 0,
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('index');
            const index = parseInt(json, 10);
            if(!isNaN(index)){
                this.setState(() => ({ index }));
            }
        } catch (error) {
            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.index !== this.state.index){
            localStorage.setItem('index',this.state.index);
        }
    }
    componentWillUnmount() {

    }
    handlePlus() {
        this.setState((prev) => ({ index : prev.index + 1}));
    }
    handleMinus() {
        this.setState((prev) => ({ index : prev.index - 1}));
    }
    handleReset() {
        this.setState(() => ({ index:0 }));
    }
    render() {
        return(
            <div>
                <h1>Counter App</h1>
                <p>Counter: {this.state.index}</p>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}