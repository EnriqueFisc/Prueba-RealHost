import { describe, expect, test } from "vitest";
import { useSelectWall } from "../../hooks/useSelectWall";
import { act, renderHook } from "@testing-library/react";

describe('Testing in useSelectWall', () => {

    test('should change the state', () => { 
        const {result} = renderHook( useSelectWall);
        act( () => {
            result.current.selectWall(1);
        })
        expect(result.current.wall['wall1Selected']).toBe(true);
     })

})