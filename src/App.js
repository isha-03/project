import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About';
import React,{useState} from 'react';

function App() {
 const [mode,setMode] = useState('light');
 const [button, setbutton] = useState('darkMode');
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    setbutton('lightMode')
    document.body.style.backgroundColor="black"
  }
  else{
    setMode('light')
    setbutton('darkMode')
    document.body.style.backgroundColor="white"
  }
 }
  return (
    <>
    <Navbar title="isha" mode={mode} toggleMode={toggleMode} button={button}/>
    <div className="container my-3">
    <Textarea mode={mode}/>
    <About/>
    </div>
   
    </>
  );
}

export default App;
