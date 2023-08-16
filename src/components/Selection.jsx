import { useState } from "react";
// import resoursepath from "./../../resource/starters"

{/* prettier-ignore */}

const Selection = () => {
    // States for User Customization
    const [language, setlanguage] = useState("Javascript");
    const [tools, settools] = useState("Vite");
    const [uilibrary, setUIlibrary] = useState("MaterialUI");
    const [links, setlink] = useState('Typescript-Vite-Scratch');
    // Function to add selected class 
  function change(classList) {
    let cardComps = document.querySelectorAll(`.${classList}`);
    for (let i of cardComps) {
      i.classList.remove("selected");
    } 
  }

//   Functions to set the Custom States when user Clicks
  function addlanguage($event) {
    setlanguage($event.target.value);
    let btnid = $event.target.id;
    change("option-lang-box");
    document.querySelector(`#${btnid}`).classList.add("selected");
  }
  function addtools($event) {
    settools($event.target.value);
    let btnid = $event.target.id;
    change("option-tools-box");
    document.querySelector(`#${btnid}`).classList.add("selected");
  }
  function addUIL($event) {
    setUIlibrary($event.target.value);
    let btnid = $event.target.id;
    change("option-UIL-box");
    document.querySelector(`#${btnid}`).classList.add("selected");
  }

  function downloadlink(){
    setlink(`${language}-${tools}-${uilibrary}`);
  }
  return (
    <div className="selection">
      <div className="option--list--container">
        <div className="list">
        <li id="ReactPlatform"><p>React Platform</p></li>    
        <li id="RLanguage"><p>Language</p></li>    
        <li id="UILibrary"><p>UI Library</p></li>       
        </div>  
        <div className="options">
  <div className="opt--container" id="ReactPlatform">
    <button className="option-tools-box opt--card selected" id="Vite" onClick={(e) => addtools(e)} value="Vite">
      <p className="radio"><span></span></p>
        <img src="../../src/assets/vitejs.svg" alt="Vite Image" />
      <p className="opt--name">Vite</p>
    </button>
  </div>
     <div className="opt--container" id="Language">
    <button
      className="option-lang-box opt--card selected"
      id="ts"
      onClick={(e) => addlanguage(e)}
      value="TypeScript"
    >
        <p className="radio"><span></span></p>
        <img src="../../src/assets/typescript.svg" alt="TypeScript Image" />
      <p className="opt--name">TypeScript</p>
    </button>
    <button
      className="option-lang-box opt--card"
      id="js"
      onClick={(e) => addlanguage(e)}
      value="Javascript">
      <p className="radio"><span></span></p>
        <img src="../../src/assets/javascript.svg" alt="Javascript Image" />
      <p className="opt--name">Javascript</p>
    </button>
  </div> 
  <div className="opt--container" id="UILibrary">
    <button
      className="option-UIL-box opt--card selected"
      id="SCR"
      onClick={(e) => addUIL(e)}
      value="Scratch"
    >
      <p className="radio"><span></span></p>
        <img src="../../src/assets/bootstrap.svg" alt="Scratch Image" />
      <p className="opt--name">Scratch</p>
    </button>
    <button
      className="option-UIL-box opt--card"
      id="MUI"
      onClick={(e) => addUIL(e)}
      value="Material-UI"
    >
      <p className="radio"><span></span></p>
        <img src="../../src/assets/material-ui.svg" alt="Material UI Image" />
      <p className="opt--name">Material UI</p>
    </button>
    <button
      className="option-UIL-box opt--card"
      id="ANTUI"
      onClick={(e) => addUIL(e)}
      value="Ant-Design"
    >
      <p className="radio"><span></span></p>
        <img src="./../../src/assets/ant-design.svg" alt="Ant Design Image" />
      <p className="opt--name">Ant Design</p>
    </button>
  </div>
  </div>
  </div>
  <div className="buttons">
    <button className="generate" id="UILibrary" onClick={(e) => {downloadlink()}}>Generate</button>
    <a href={`./../../resource/starters/${links}.zip`} className="downloadlink" id="generatelink" download={links}>Download</a>
  </div>
  </div>
  );
};



export default Selection;


