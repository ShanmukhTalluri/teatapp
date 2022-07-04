import React, { useState } from "react";
import "../index.css";
const TextForm =(props)=>{
    const [text,setText] = useState("");
    let handleUpClick=()=>{
        props.showAlert("upperCase has been enabled","success");
        setText(text.toUpperCase());
    }
    let handleOnChange=(event)=>{
        console.log(event.target.value);
        setText(event.target.value);
    }
    const CopyClick=()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    let ClearExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("extra spaces have been cleared","success");
    }
    let handleDownClick=()=>{
        props.showAlert("lowerCase has been enabled","success");
        setText(text.toLowerCase());
    }
    const ClearClick=()=>{
        setText("");
    }
    return(<>
    <div className="container" style={props.text_color_}>
     <div className="mb-3">
         <h1>{props.heading}</h1>
          <label for="exampleFormControlTextarea1" class="form-label">{props.title}</label>
          <textarea class="form-control" value={text}  id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
     </div>
     <div className="container ">
     <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
     <span>                 </span>
     <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowerCase</button>
     <span>                 </span>
     <button className="btn btn-primary mx-1 my-1" onClick={ClearClick}>Clear</button>
     <span>                 </span>
     <button className="btn btn-primary mx-1 my-1" onClick={CopyClick}>Copy text</button>
     <span>                 </span>
     <button className="btn btn-primary mx-1 my-1" onClick={ClearExtraSpace}>Clear extra spaces</button>
     </div>
        </div>
        <div className="container">
            <h1>Your Text summary </h1>
            <p>{text.split(" ").filter((element)=>text.length!==0).length} words and {text.length} charecters</p>
            <p>{0.008 * text.split("").length}     minutes read</p>
            <h1>Preview</h1>
            <p>{text.length<=0?"enter something to preview it here":text}</p>
        </div>
        </>
    )
}
export default TextForm;