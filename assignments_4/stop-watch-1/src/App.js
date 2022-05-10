import logo from './logo.svg';
import './App.css';
import StopWatch from './components/stopWatch';
import ClassStopwatch from './components/ClassStopwatch'
import { useState } from 'react';

//fyuguihiouokojijiuiu

function App() {
  const [fun, isActive] = useState(true);
  function change() {
    isActive(!fun);
  }
  return (      
    <div className="App">

      <button onClick={change}>Toggle</button>
      
      {
        fun ? <StopWatch></StopWatch> : <ClassStopwatch></ClassStopwatch>
      }

    </div>
  );
}

export default App;
