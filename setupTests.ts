import "@testing-library/jest-dom/extend-expect";
import { configure as jestConfigure } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

jestConfigure({
  testIdAttribute: "data-test-id",
});

configure({ adapter: new Adapter() });
