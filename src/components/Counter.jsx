import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: "Sarah"
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("FIRE: getDerivedStateFromProps")
        // console.log("nextProps", nextProps)
        // console.log("prevState", prevState)
        // if (prevState.count === 3) {
        //     return {
        //         name:"Sara Johns"
        //     }
            return null
    }
    componentDidMount() {
        console.log("Component mounted ")
        this.props.callWhenReady();
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", {
            nextProps, nextState
        })
        if (nextState.name === this.state.name && this.state.count ===nextState.count) {
            return false;
        }
        return true;
    }
    render() {
         return(
            <div>
                <h2>Counter: Name: {this.state.name}</h2>
                <h3>Current count: {this.state.count}</h3>
                <button onClick={() => this.setState({count:this.state.count +1})}>Increment by 1</button>
                 <button onClick={() => this.setState({ name: "John" })}>Set name to John</button>
             </div>
                
        )
    }
       
}

export default Counter;