import React from "react";
import { useSelectWall } from "../../hooks/useSelectWall";
import { ButtonsBar } from "../buttonsBar/ButtonsBar";

export const CanvasContainer = ({ children }) => {
  const { wall, selectWall } = useSelectWall();
  return (
    <>
      <div className="controls__container">
        <h1>Prueba técnica RealHost</h1>
        <ButtonsBar selectWallFunc={selectWall} />
      </div>
      <section className="canvas__canvas-container">{children(wall)}</section>
    </>
  );
};
