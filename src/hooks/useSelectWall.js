import { useState } from "react";

const initState = {
    wall1Selected: false,
    wall2Selected: false,
    wall3Selected: false,
    wall4Selected: false,
};
export const useSelectWall = ( initialState = initState ) => {
    const [wall, setWall] = useState(initialState);

    const selectWall = (number) => {
        setWall({
            ...initialState,
            [`wall${number}Selected`]: !initialState[`wall${number}Selected`],
        });
    };

    return { 
        wall,
        selectWall
    }
}
