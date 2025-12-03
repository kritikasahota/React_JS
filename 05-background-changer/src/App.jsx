import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [color, setColor] = useState("Blue")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className =" flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("#03045e")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#03045e" }}>Blue</button>

          <button onClick={() => setColor("#a4133c")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#a4133c" }}>Pink</button>

          <button onClick={() => setColor("#8338ec")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#8338ec" }}>Purple</button>

          <button onClick={() => setColor("#d00000")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#d00000" }}>Red</button>

          <button onClick={() => setColor("#002400")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#002400" }}>Green</button>

          <button onClick={() => setColor("#d16014")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#d16014" }}>Orange</button>

          <button onClick={() => setColor("#2e0014")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#2e0014" }}>Violet</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
