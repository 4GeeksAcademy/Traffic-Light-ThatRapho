import React from "react";

const Background = ({ color, children }) => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <div
        className="d-flex flex-column"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: color === "red" ? "rgb(243, 82, 82)" : "rgb(102, 41, 41)",
          }}
        />
        <div
          style={{
            flex: 1,
            backgroundColor: color === "yellow" ? "rgb(255, 243, 74)" : "rgb(112, 111, 35)",
          }}
        />
        <div
          style={{
            flex: 1,
            backgroundColor: color === "green" ? "rgb(112, 243, 108)" : "rgb(31, 80, 31)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
