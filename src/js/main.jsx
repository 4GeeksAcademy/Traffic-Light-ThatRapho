import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Lights from './components/Light';
import Background from './components/BG';

const Main = () => {
  const [color, setColor] = useState("red");
  const [cycling, setCycling] = useState(false);

  useEffect(() => {
    if (!cycling) return;

    const interval = setInterval(() => {
      setColor((prev) =>
        prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [cycling]);

  return (
    <Background color={color}>
    <Lights
      color={color}
      setColor={setColor}
      cycling={cycling}
      toggleCycling={() => setCycling(!cycling)}
    />
    </Background>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
