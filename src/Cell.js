import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state={
            color: props.value
        }
    }

    goGrey = () => {
        console.log("go grey!")
        this.setState({color: "#333"})
    }

    // divStyle = {
    //     backgroundColor: this.state.value
    // }

    render() {
        return (
            <div className = "cell" style={{backgroundColor: this.state.color}} onClick={this.goGrey}>

            </div>
        )
    }
}
