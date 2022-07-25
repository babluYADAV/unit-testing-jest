import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App test", () => {
  test("snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should app render", () => {
    render(<App />);
    const rootComp = screen.getByTestId("myrootdiv");
    expect(rootComp).toBeInTheDocument();
  });
});
