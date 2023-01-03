import * as Blockly from "blockly/core";
import BlocklyJavaScript from "blockly/javascript";



Blockly.defineBlocksWithJsonArray([


  {
    "type": "s_jump",
    "message0": "Jump",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 270,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "s_move_r",
    "message0": "Move Right",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 225,
    "tooltip": "",
    "helpUrl": ""
}

]);

BlocklyJavaScript["s_jump"] = function (block){
    return 'codeS-jump';
}

BlocklyJavaScript["s_move_r"] = function (block){
    return 'codeS-jump';
}
