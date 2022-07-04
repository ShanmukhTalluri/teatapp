import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter as Router,Routes,Route,Switch} from "react-router-dom";
import './index.css';
function App() {
  const [mode,setMode] = useState("dark");
  const [text_lightdark,setText_LightDark] = useState("text-light");
  // let [text_color,setTextColor] = useState("black");
  let [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({ 
      msg:message,type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  let [text_badal,setTextBadal]=useState("Enable Dark Mode");
  let [text_badalRed,setTextBadalRed]=useState("Enable Red Dark Mode");
  let [text_badalGreen,setTextBadalGreen]=useState("Enable Green Dark Mode");
  let toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode has been enabled","success");
      setInterval(()=>{document.title="textUtils-Dark Mode"},2000);  
      // setTextColor("white")
      document.body.style.color="white";
    }else{
      setMode("light");
      // setTextColor("black")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("light mode has been enabled","success");
      setInterval(()=>{document.title="textUtils-Dark Mode"},2000);
    }
    if(text_lightdark==="text-light"){
      setText_LightDark("text-dark");
    }else{
      setText_LightDark("text-light");
    }
    if(text_badal==="Enable Dark Mode"){
      setTextBadal("Enable Light Mode");
    }else{
      setTextBadal("Enable Dark Mode");
    }
  }

  let toggleModeGreen=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#6da779";
      showAlert("green dark mode has been enabled","success");
      // setTextColor("white")
    }else{
      setMode("light");
      // setTextColor("black")
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
    }
    if(text_lightdark==="text-light"){
      setText_LightDark("text-dark");
    }else{
      setText_LightDark("text-light");
    }
    if(text_badalGreen==="Enable Green Dark Mode"){
      setTextBadalGreen("Enable Light Mode");
    }else{
      setTextBadalGreen("Enable Green Dark Mode");
    }
  }

  let toggleModeRed=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#c97272";
      showAlert("red dark mode has been enabled","success");
      // setTextColor("white")
    }else{
      setMode("light");
      // setTextColor("black")
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
    }
    if(text_lightdark==="text-light"){
      setText_LightDark("text-dark");
    }else{
      setText_LightDark("text-light");
    }
    if(text_badalRed==="Enable Red Dark Mode"){
      setTextBadalRed("Enable Light Mode");
    }else{
      setTextBadalRed("Enable Red Dark Mode");
    }
  }
  return (
   <>
   <Router>
   <div className='abc'>
  
   
   <Navbar title="TextUtils" about='about' 
   toggle={toggleMode} mode_={mode} text_change={text_lightdark} text_badal_={text_badal}
   
   togglegreen={toggleModeGreen} mode_green={mode} text_changegreen={text_lightdark} text_badal_green={text_badalGreen}
   
   togglered={toggleModeRed} mode_red={mode} text_changered={text_lightdark} text_badal_red={text_badalRed}/>

   <Alert alert={alert}/>
   <Switch>
   <Route path="/about">
           <About/>
      </Route>
      <Route path='/'>  
           <TextForm showAlert={showAlert} heading="Enter Your Text Here-->" title="example text area" />
      </Route>
      
   </Switch>
   </div>
   
   </Router>
   </>
  );
}

export default App;
