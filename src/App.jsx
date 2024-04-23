import { useState } from "react";
import "./App.css";
import SwitchColor from "./SwitchColor";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClickOutside = () => {
    setClicks((c) => c + 1);
  };

  const getRandomColor = () => {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleChangeColor = () => {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  };

  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClickOutside}>
      <SwitchColor onChangeColor={handleChangeColor} />
      <br />
      <h2>Click count: {clicks}</h2>
    </div>
  );
}

export default App;
