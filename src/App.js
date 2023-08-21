
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


 function App() {
  const [mode, setMode]=useState('light')

  const toggleFunction=()=>{
    if(mode==='light'){
    setMode('dark');
  document.body.style.backgroundColor="#0d0d32"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white"
  } 
  }

  return (
    <>
    <Navbar title="textUtils"  mode={mode} toggle={toggleFunction}/> 
    {/* so here mode is taking an object as input value */}
    <div className = "container">
    <TextForm heading="Enter text to analyze" mode={mode}/>
    </div>
      
    </>
  )
}

export default App;
