import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ButtonsBar } from "../../../components/buttonsBar/ButtonsBar";

describe("Test in ButtonsBar Component", () => {
  test("should render <ButtonsBar/>", () => {
    render(<ButtonsBar />);
    expect(screen.getByText("Pared 1")).toBeDefined();
    expect(screen.getByText("Pared 2")).toBeDefined();
    expect(screen.getByText("Pared 3")).toBeDefined();
    expect(screen.getByText("Pared 4")).toBeDefined();
  });
  test("should match with snapshot", () => {
    const component = render(<ButtonsBar />);
    expect(component.container).toMatchSnapshot();
  });
});
