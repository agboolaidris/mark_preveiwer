import React, {useState} from 'react';
import {MarkdownPreview} from 'react-marked-markdown'


function App() {
  

  const placeholder = `
  ## hello world
  `
  const [state, setstate] = useState(placeholder)

  

  const handleChange = (e)=>{
     setstate(e.target.value)
     console.log(state)
  }


  return (
    <div className="App">
      <div>
         <form>
           <label>Editor</label>
           <textarea id='editor' value={state} onChange={handleChange}>
          </textarea>
         </form>
      </div>
      <div >
         <span>
           Previewer
         </span>
         <div id='previewer' >
           <MarkdownPreview value={ state } />
  
         </div>
      </div>
    </div>
  );
}

export default App;
