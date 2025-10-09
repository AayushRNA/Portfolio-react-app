import React, { useState } from "react";

const Darkmode = () => {
  const [dark, setDark] = useState(false);

  const on = () => {
    if (dark) {
      document.body.style.background = "white";
      document.body.style.color = "black";
      setDark(false);
    } else {
      document.body.style.background = "#121212";
      document.body.style.color = "white";
      setDark(true);
    }
  };

  return (
    <>
      <button className="btn btn-dark rounded-pill" onClick={on}>
        Go Dark
      </button>
    </>
  );
};

export default Darkmode;
