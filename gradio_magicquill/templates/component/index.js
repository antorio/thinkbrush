import React from "react";
import './style.css';

export default function ThinkBrushToolbar() {
  return (
    <div className="custom-top-toolbar">
      {/* 1. upload icon */}
      <button id="upload-btn" title="Upload"><i className="fa fa-upload"></i></button>

      {/* 2. add brush icon */}
      <button id="add-brush-btn" title="Add Brush"><i className="fa fa-paint-brush"></i></button>

      {/* 3. subtract brush icon */}
      <button id="sub-brush-btn" title="Subtract Brush"><i className="fa fa-paint-brush"></i></button>

      {/* 4. color brush icon */}
      <input type="color" id="color-brush" title="Color Brush" />

      {/* 5. eraser icon */}
      <button id="eraser-btn" title="Eraser"><i className="fa fa-eraser"></i></button>

      {/* 6. pick icon */}
      <button id="pick-btn" title="Pick Color"><i className="fa fa-eye-dropper"></i></button>

      {/* 7. brush size slider */}
      <input type="range" id="brush-size" min="1" max="100" defaultValue="25" title="Brush Size" />

      {/* 8. undo icon */}
      <button id="undo-btn" title="Undo"><i className="fa fa-undo"></i></button>

      {/* 9. redo icon */}
      <button id="redo-btn" title="Redo"><i className="fa fa-redo"></i></button>

      {/* 10. eye icon */}
      <button id="eye-btn" title="Toggle Visibility"><i className="fa fa-eye"></i></button>

      {/* 11. trash icon */}
      <button id="trash-btn" title="Clear"><i className="fa fa-trash"></i></button>

      {/* 12. prompt input */}
      <input type="text" id="prompt-box" placeholder="Enter prompt..." />

      {/* 13. Run button */}
      <button id="run-btn" className="primary">Run</button>

      {/* 14. download icon */}
      <button id="download-btn" title="Download"><i className="fa fa-download"></i></button>
    </div>
  );
}}
