import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnChange = (event)=>{
  setText(event.target.value);
}

const handleOnClick = ()=>{
  let newText = text.toUpperCase();
  setText(newText)
}
const handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
}

const handleCopyClick = ()=>{
  let text = document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
}
const handleClearText = ()=>{
  let newText = ""
  setText(newText)
}
const handleExtraSpaces= ()=> {
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
}
  
const[text, setText]= useState("")
  return(
 
<div class="container" style={{color:props.mode==="dark"?"white":"black"}}>
<h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = 
    {handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea> </div>

<button className= "btn btn-primary" onClick =       
           {handleOnClick}>Convert to uppercase</button>
<button className= "btn btn-primary mx-1"  onClick =       
           {handleLoClick}>Convert to lowercase</button>
<button className= "btn btn-primary mx-1"  onClick =       
           {handleCopyClick}>Copy to clipboard</button>
<button className= "btn btn-primary mx-1"  onClick =  
           {handleClearText}>Clear Text</button>
<button className= "btn btn-primary mx-1"  onClick =  
           {handleExtraSpaces}>Remove Extra Spaces</button>

    
    <div>
      <p> {text.split(" ").filter(x => x!=="").length}words and {text.length} characters</p>
      <p>{0.008*text.length} Minutes to read</p>
    </div>

</div>

  )
}

//So story here is first we set the default value by using useState hook. There are several other hooks as well. then we insert that value of text in text area with {text}.
//In order to change the text or value in text area we have to make onChange function and of course to make it uppercase we also make a another function.
//This same work is very hard to do in palin html js. we have to insert innerhtml then we have to make event listener.