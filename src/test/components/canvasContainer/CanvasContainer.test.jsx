import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CanvasContainer } from "../../../components/canvasContainer/CanvasContainer";

describe("Test in CanvasContainer", () => {
  test("should match with snapshot", () => {
    const { container } = render(<CanvasContainer>{() => {}}</CanvasContainer>);
    expect(container).toMatchSnapshot();
  });
});
