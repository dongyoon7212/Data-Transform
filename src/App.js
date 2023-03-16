/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [mb, setMb] = useState("");

  function handleInputChangeMb(event) {
    mb = setMb(event.target.value);
  }

  let [gb, setGb] = useState('')

  function handleInputChangeGb(event) {
    gb = setGb(event.target.value)
  }

  return (
    <div className="App">
      <div>
        <h4 id="title">Data Transform</h4>
        <div id="MBKB">
          <h4 className="smallTitle">KB</h4>
          <input
            type="int"
            value={mb}
            onChange={handleInputChangeMb}
            placeholder="MB"
          ></input>
          <p>결과값 : {(mb * 1024).toLocaleString('ko-KR')}KB</p>
          <p>결과값 : {(mb / 1024).toFixed(2)}GB</p>
        </div>
        <div id="GBMB">
          <h4 className="smallTitle">GB</h4>
          <input
            type="int"
            value={gb}
            onChange={handleInputChangeGb}
            placeholder="GB"
          ></input>
          <p>결과값 : {(gb * 1024).toLocaleString('ko-KR')} MB</p>
          <p>결과값 : {(gb / 1024).toFixed(2)}TB</p>
        </div>
      </div>
    </div>
  );
}

export default App;
