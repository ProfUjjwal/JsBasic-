import logo from './logo.svg';
import './App.css';
import {WhiteScreen} from './components/WhiteScreen';
import Header from './components/Header';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './components/ContactForm';


function App() {
  const [peps, setPeps] = useState([]);
  return (
     
      <Routes>
        <Route path='' element={<WhiteScreen />} exact />
        <Route path='add' element={<ContactForm />} />
        <Route path='update' element = {<ContactForm/>} />
      </Routes>
     
  );
}

export default App;
