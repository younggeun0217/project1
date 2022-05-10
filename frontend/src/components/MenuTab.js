import React, { useState } from "react";
import styles from "../css/MenuTab.module.css";
import Search from "./Search";
import TimeTab from "./TimeTab";

export default function MenuTab() {
  const [useIndex, setUseIndex] = useState(0);
  const menuArr = [
    {
      title: (
        <li
          className={useIndex === 0 ? styles.active : ""}
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
          className={useIndex === 1 ? styles.active : ""}
          onClick={() => clickHandler(1)}
        >
          화제가 됐던 검색어
        </li>
      ),
      content: <TimeTab></TimeTab>,
    },
  ];
  const clickHandler = (_Id) => {
    setUseIndex(_Id);
  };
  return (
    <>
      <ul className={styles.tabs}>
        {menuArr.map((section, index) => {
          return section.title;
        })}
      </ul>
      {menuArr[useIndex].content}
    </>
  );
}
