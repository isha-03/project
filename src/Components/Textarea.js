import React ,{useState} from 'react';

export default function Textarea(props) {
  const[text,setText]=useState("");
  const handleOnChange= (event)=>{
    setText(event.target.value)
  }
  const handleUpClick= ()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick= ()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const hide= ()=>{
    let newText="";
    setText(newText);
  }
  
  return (
    <>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" style={{color:props.mode==='light'?'black':'white'}} className="form-label"><h1>Enter text</h1></label>
  <textarea class="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>lower case</button>
<button className="btn btn-primary mx-1" onClick={hide}>hide</button>



<div className="container my-3">
  <h2 style={{color:props.mode==='light'?'black':'white'}}>Text Summary</h2>
  <p style={{color:props.mode==='light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters.</p>
  <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
  <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text:"enter text to preview"}</p>
</div>
</>
  );
}
