import React, { useState } from "react";
import "../css/MenuTab.css";

export default function MenuTab() {
  const [useIndex, setUseIndex] = useState(0);
  const menuList = [
    {
      title: (
        <li
          className={useIndex === 0 ? "active" : ""}
          onClick={() => clickHandler(0)}
        >
          검색
         
        </li>
      ),
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
    <ul className="tabs">
      {menuList.map((section, index) => {
        return section.title;
      })}
    </ul>
  );
}
