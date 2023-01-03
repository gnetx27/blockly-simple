import { useState } from "react";
import * as Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";

import "./Blocks/generator";

import useBlockly from "./Blockly/useBlockly";

import "./styles.css";
import Mygame from './game1/gameHome';

Blockly.setLocale(locale);

export default function App() {
  const { BlocklyComponent, generate } = useBlockly({
   /*
    defualt stage block define

    initialBlock: {
      kind: "on_start",
      x: 10,
      y: 10
    },
    */

    toolbox: {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Custom",
          contents: [
            
            {
              kind: "block",
              type: "s_jump"
            },
            {
              kind: "block",
              type: "s_move_r"
            }

          ]
        }
      ]
    }
  });

  const [generated, setGenerated] = useState("");

  function handleGenerate() {
    setGenerated(generate());
  }

  return (
    <>
	<div className="page">
      <h1 className="title">Blockly tester 9</h1>
	</div>
	
    <div className="AppStage">
		<BlocklyComponent />
		<Mygame />
	</div>
      
	  
      <div className="output">
        <button className="btn-generat" onClick={handleGenerate}>Run</button>
        <div>{generated}</div>
      </div>
	</>
  );
}
