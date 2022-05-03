import React, { useState } from "react";
import "../css/MenuTab.css";
import Search from "./Search";

export default function MenuTab() {
  const [useIndex, setUseIndex] = useState(0);
  const menuArr = [
    {
      title: (
        <li
          className={useIndex === 0 ? "active" : ""}
          onClick={() => clickHandler(0)}
        >
          검색
        </li>
      ),
      content: <Search></Search>,
    },
    {
      title: (
        <li
          className={useIndex === 1 ? "active" : ""}
          onClick={() => clickHandler(1)}
        >
          화제가 됐던 검색어
        </li>
      ),
    },
  ];
  const clickHandler = (_Id) => {
    setUseIndex(_Id);
  };
  return (
    <>
      <ul className="tabs">
        {menuArr.map((section, index) => {
          return section.title;
        })}
      </ul>
      <div>{menuArr[useIndex].content}</div>
    </>
  );
}
