import renderer from "react-test-renderer";
import App from "./App";

describe("renders learn react link", () => {
 let component = null;
 it("renders correctly", () => {
  component = renderer.create(<App />);
 });
 it("matches snapshot", () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 });
});
