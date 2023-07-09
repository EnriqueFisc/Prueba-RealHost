import React from "react";

export const ButtonsBar = ({ selectWallFunc }) => {
  return (
    <div className="buttonsBar__container">
      <button onClick={() => selectWallFunc(1)}>Pared 1</button>
      <button onClick={() => selectWallFunc(2)}>Pared 2</button>
      <button onClick={() => selectWallFunc(3)}>Pared 3</button>
      <button onClick={() => selectWallFunc(4)}>Pared 4</button>
    </div>
  );
};
