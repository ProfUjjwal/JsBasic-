import React, { Component } from 'react'

export default class ClassStopwatch extends Component {
  constructor() {
    super();
    this.state = {
      count : 0,
      interval : 0,
      pause : true
    }
  }

  start=()=> {
    this.setState(() => ({pause : !this.state.pause}))
    if(this.state.pause == false) {
      let temp = setInterval(this.incCount, 1000);
      this.state.interval = temp;
    }
    else {
      clearInterval(this.state.interval);
    }
  }

  incCount=()=> {
    this.setState(()=>({count:this.state.count+1}));
  }

  Reset=()=> {
    this.setState(() => ({count:0}));
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <p>Class Component Stopwatch</p>
        <span id="class-time">{ Math.floor(this.state.count/60) } :  { this.state.count%60 }</span>
        <br />
        <button id = "class-reset" onClick={this.Reset}> Reset </button>
        <button id = "class-start" onClick={this.start}> Start/Stop </button>
      </div>
    )
  }
}
