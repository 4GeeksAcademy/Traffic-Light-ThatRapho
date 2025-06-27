import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const Lights = ({ color, setColor, toggleCycling, cycling }) => {
  return (
    <div className="d-flex align-items-center vh-100">
      <div
        className="d-flex flex-column align-items-center p-4"
        style={{
          width: "240px",
          marginLeft: "400px",
          backgroundColor: "#333",
          borderRadius: "30px",
        }}
      >
        {/* Red Light */}
        <button type="button" className="btn"
          onClick={() => setColor("red")}
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: "red",
            borderRadius: "50%",
            margin: "12px 0",
            boxShadow:
              color === "red" ? "rgb(236, 109, 109) 0 0 70px 4px" : "none",
            filter: color === "red" ? "brightness(1)" : "brightness(0.4)",
          }}
        />

        {/* Yellow Light */}
        <button type="button" className="btn"
          onClick={() => setColor("yellow")}
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            margin: "12px 0",
            boxShadow:
              color === "yellow"
                ? "rgb(223, 235, 119) 0 0 70px 4px"
                : "none",
            filter: color === "yellow" ? "brightness(1)" : "brightness(0.4)",
            cursor: "pointer",
          }}
        />

        {/* Green Light */}
        <button type="button" className="btn"
          onClick={() => setColor("green")}
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: "green",
            borderRadius: "50%",
            margin: "12px 0",
            boxShadow:
              color === "green" ? "rgb(125, 238, 135) 0 0 70px 4px" : "none",
            filter: color === "green" ? "brightness(1)" : "brightness(0.4)",
            cursor: "pointer",
          }}
        />
        <div className="w-100 d-flex justify-content-end">
          <button className="btn btn-dark" type="button" onClick={toggleCycling}>
        <FontAwesomeIcon icon={cycling ? faPause : faPlay} />
      </button>
        </div>
      </div>
    </div>
  );
};

export default Lights;
