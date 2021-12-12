import React from "react";
import renderer from "react-test-renderer";

const LearnJest = "./LearnJest";

describe("LearnJest", () => {
  let component = null;
  it("renders correctly", () => {
    component = renderer.create(<LearnJest />);
  });

  it("matches snapshot", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("add info correctly", () => {
    let info = { name: "", age: "", job: "" };
    const setInfo = jest.fn((e) => (info = { ...info, [e.target.name]: e.target.value }));

    expect(setInfo({ target: { name: "name", value: "kim" } })).toStrictEqual({ name: "kim", age: "", job: "" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 이전 버전의 JEST.
  // Functional Component 는 인스턴스가 아니기 때문에 getInstance 가 먹히지 않는다.
  // 직접 jest.fn 을 이용해서 함수를 생성 후 동작시켜야 한다.

  // 또한 tobe 는 원시 값만 비교하는 메서드로 객체를 비교하기 위해선 toEqual 혹은
  // toStrictEqual 을 사용해야한다.
  //---------------------------------
  // it("add info correctly", () => {
  //   component.getInstance().setInfoHandler({ target: { name: "out_test", value: "out_test" } });
  //   expect(component.getInstance().info).toBe({ name: "in_test", age: 100, job: "test" });
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  //---------------------------------
});
