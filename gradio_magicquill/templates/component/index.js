import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";

export default function Component({ value, setValue }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return h("div", { className: "main-container" }, [

    // === compact top toolbar ===
    h("div", { className: "custom-top-toolbar" }, [

      h("button", { id: "upload-btn", title: "Upload" }, [
        h("i", { className: "fa fa-upload" })
      ]),

      h("button", { id: "add-brush-btn", title: "Add Brush" }, [
        h("i", { className: "fa fa-paint-brush" })
      ]),

      h("button", { id: "sub-brush-btn", title: "Subtract Brush" }, [
        h("i", { className: "fa fa-paint-brush" })
      ]),

      h("input", { type: "color", id: "color-brush", title: "Color Brush" }),

      h("button", { id: "eraser-btn", title: "Eraser" }, [
        h("i", { className: "fa fa-eraser" })
      ]),

      h("button", { id: "pick-btn", title: "Pick Color" }, [
        h("i", { className: "fa fa-eye-dropper" })
      ]),

      h("input", {
        type: "range",
        id: "brush-size",
        min: "1",
        max: "100",
        defaultValue: "25",
        title: "Brush Size"
      }),

      h("button", { id: "undo-btn", title: "Undo" }, [
        h("i", { className: "fa fa-undo" })
      ]),

      h("button", { id: "redo-btn", title: "Redo" }, [
        h("i", { className: "fa fa-redo" })
      ]),

      h("button", { id: "eye-btn", title: "Toggle Visibility" }, [
        h("i", { className: "fa fa-eye" })
      ]),

      h("button", { id: "trash-btn", title: "Clear" }, [
        h("i", { className: "fa fa-trash" })
      ]),

      h("input", {
        type: "text",
        id: "prompt-box",
        placeholder: "Enter prompt..."
      }),

      h("button", { id: "run-btn", className: "primary" }, "Run"),

      h("button", { id: "download-btn", title: "Download" }, [
        h("i", { className: "fa fa-download" })
      ])
    ]),

    // === main canvas ===
    h("canvas", { ref: canvasRef, width: 512, height: 512 })
  ]);
}
