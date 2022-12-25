import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState('Enter text here...');

  const handleUpClick = () => {
    let uptext = text.toUpperCase();
    setText(uptext);
    props.showAlert('Converted to uppercase', 'success');
  }
  const handleLoClick = () => {
    let uptext = text.toLowerCase();
    setText(uptext);
    props.showAlert('Converted to lowercase', 'success');
  }
  const handleCleartext = () => {
    let uptext = '';
    setText(uptext);
    props.showAlert('All Text removed..type something new...', 'success');
  }

  const handleCopytext = () => {
    console.log("I am copy");
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied successfully', 'success');
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert('All extra spaces are removed now..', 'success');
  }

  const changeText = (event) => {
      setText(event.target.value);
      
  }

  return (
    <>
      <div className="container mt-5">
      
        <div className="mb-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
          <label for="exampleFormControlTextarea1" className="form-label"><h1>Enter the text you want:</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            placeholder="What's in your mind?"
            onChange={changeText}
            style ={{backgroundColor: props.mode === 'light' ? 'white':'grey', color:props.mode === 'dark' ? 'white':'black'}}
          ></textarea>
        <button className="btn btn-primary mt-2" onClick={handleUpClick}>UPPERCASE</button>&nbsp;
        <button className="btn btn-primary mt-2 mr-2" onClick={handleLoClick}>LOWERCASE</button>&nbsp;
        <button className="btn btn-primary mt-2 mr-2" onClick={handleCleartext}>CLEAR TEXT</button>&nbsp;
        <button className="btn btn-primary mt-2 mr-2" onClick={handleCopytext}>COPY TEXT</button>&nbsp;
        <button className="btn btn-primary mt-2 mr-2" onClick={handleExtraSpaces}>REMOVE EXTRA SPACE</button>
        </div>
      </div>
 
      <div className="container mt-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter your text to preview...'}</p>
      </div>
    </>
  );
}
