import logo from './logo.svg';
import './App.css';
import {WhiteScreen} from './components/WhiteScreen';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [peps, setPeps] = useState([]);
  return (
    <div className='App'>
      {/* <Header /> */}
      <WhiteScreen />
    </div>
  );
}

export default App;
