import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success");
    }
    const handleSpaceClick = () =>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        // \s: matches any whitespace symbol: spaces, tabs, and line breaks
        // +: match one or more of the preceding tokens (referencing \s)
        // g: the g at the end indicates iterative searching throughout the full string
        props.showAlert("Extra Space is been removed","success");
    }
    const handleClrClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is been copied","success");
    }
    const handleOnChange = (event) =>{

        setText(event.target.value);
    }
    const [text,setText] = useState("");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            
            <textarea className="form-control" id="myBox" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to UpperCase</button>
            <button className="btn btn-primary mx-3"  onClick={handleLowClick}>convert to LowerCase</button>
            <button className="btn btn-primary mx-2"  onClick={handleClrClick}>clear Text</button>
            <button className="btn btn-primary mx-2"  onClick={handleCopyClick}>copy Text</button>
            <button className="btn btn-primary mx-2"  onClick={handleSpaceClick}>remove Extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary </h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read the text </p>

        </div>
        </>
    )
}
