
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setSwitchText('Enable light mode');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light');
      setSwitchText('Enable dark mode');
      document.body.style.backgroundColor ='white';
      showAlert("light mode is enabled", "Success");
    }
    
  }
  const [mode, setMode] = useState('dark'); 

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const [alert, setAlert] = useState(null)
  const[switchText, setSwitchText] = useState('Enable light mode');

  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switchText ={switchText} AboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
    </Routes>
    </div>
    </Router>
    
    
    </>
  );
}

export default App;
