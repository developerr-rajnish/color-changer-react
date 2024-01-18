import { useState } from "react";            

function App() {
  const [bgColor, setBgColor] = useState("black"); 

  return (
    <div
      style={{ background: bgColor}} 
      className="button-box d-flex justify-content-center align-items-end pb-5 w-100 vh-100"
    >
      <div className="button-container bg-white px-2 py-3 rounded-4">
        <button
          onClick={() => setBgColor("red")}
          style={{ background: "red" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("green")}
          style={{ background: "green" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor("blue")}
          style={{ background: "blue" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Blue
        </button>              
        <button
          onClick={() => setBgColor("olive")}
          style={{ background: "olive" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Olive
        </button>
        <button
          onClick={() => setBgColor("gray")}
          style={{ background: "gray" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Gray
        </button>
        <button
          onClick={() => setBgColor("yellow")}
          style={{ background: "yellow" }}
          type="button"
          className="text-black border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Yellow
        </button>
        <button
          onClick={() => setBgColor("pink")}
          style={{ background: "pink" }}
          type="button"
          className="text-black border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Pink
        </button>
        <button
          onClick={() => setBgColor("purple")}
          style={{ background: "purple" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Purple
        </button>
        <button
          onClick={() => setBgColor("lavender")}
          style={{ background: "levender" }}
          type="button"
          className="text-black border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Lavender
        </button>
        <button
          onClick={() => setBgColor("white")}
          style={{ background: "white" }}
          type="button"
          className="text-black border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          White
        </button>
        <button
          onClick={() => setBgColor("black")}
          style={{ background: "black" }}
          type="button"
          className="text-white border-0 rounded-4 mx-2 px-3 py-1 shadow-lg"
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;

