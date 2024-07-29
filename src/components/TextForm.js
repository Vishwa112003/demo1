import React,{useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const uppercase =()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase(); //the main function to change the text to uppercase
       props.showAlert("Converted to Uppercase","success");
        setText(newText) 

    }
    const lowercase = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase(); //the main function to change the text to lowercase
        props.showAlert("Converted to Lowercase","success");
        setText(newText) 
    }
    const cleartext = ()=>{
        console.log();
        let newText = ''; //the main function to change the text to clear text
        setText(newText) 
        props.showAlert("Cleared the text","success");
    }    
    function onchange(event) {
        console.log("on change");
        setText(event.target.value); //helps typing furtur or else it wont let you type
    }
    const handleCopy=()=>{ 
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange (0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert ("Copied to Clipboard!","success");
    }
      const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(""));
      props.showAlert("Extra spaces removed!","success");
      }
      const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
      }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={onchange} style={{backgroundColor:props.mode==='dark'?'#455a70':'white', color:props.mode==='dark'?'white':'black' }} id="myBox" rows="10" placeholder='Type here...'></textarea>
      </div>
      <button className="btn btn-primary mx-2 " onClick={uppercase}>UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={lowercase}>lowercase</button>
      <button className="btn btn-primary mx-2" onClick={cleartext}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra space</button>
      
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Summary</h2>
        <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
        <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
    </div>
    </>
  )
}
