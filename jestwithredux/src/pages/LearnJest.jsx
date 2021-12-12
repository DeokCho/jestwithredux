import React, { useState, useEffect } from "react";
import "./LearnJest.css";

const LearnJest = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    age: "",
    job: "",
  });

  const { name, age, job } = info;

  const setInfoHandler = (eventObj) => {
    setInfo({ ...info, [eventObj.target.name]: eventObj.target.value });
  };

  useEffect(() => {
    setData([
      { name: "kim", age: 20, job: "student" },
      { name: "lee", age: 25, job: "none" },
      { name: "park", age: 30, job: "programmer" },
    ]);
  }, []);

  return (
    <>
      <table>
        <th>이름</th>
        <th>나이</th>
        <th>직업</th>
        {data.length > 0 &&
          data.map(({ name, age, job }) => (
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{job}</td>
            </tr>
          ))}
      </table>
      <span>
        이름
        <input value={name} onChange={setInfoHandler} name="name" />
      </span>
      <span>
        나이
        <input value={age} onChange={setInfoHandler} name="age" />
      </span>
      <span>
        직업
        <input value={job} onChange={setInfoHandler} name="job" />
      </span>
      <a
        onClick={() => {
          return name && age && job ? (setData([...data, info]), setInfo({ name: "", age: "", job: "" })) : alert("정보 없음");
        }}
      >
        추가
      </a>
    </>
  );
};

export default LearnJest;
