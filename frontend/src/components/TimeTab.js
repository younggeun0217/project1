import React, { useState } from "react";
import styles from "../css/TimeTab.module.css";
import TimeBar from "./TimeBar";

export default function TimeTab(props) {
  const [useIndex, setUseIndex] = useState(0);
  const menuArr = [
    {
      title: (
        <li
          className={useIndex === 0 ? styles.active : ""}
          onClick={() => clickHandler(0)}
        >
          하루
        </li>
      ),
    },
    {
      title: (
        <li
          className={useIndex === 1 ? styles.active : ""}
          onClick={() => clickHandler(1)}
        >
          일주일
        </li>
      ),
    },
    {
      title: (
        <li
          className={useIndex === 2 ? styles.active : ""}
          onClick={() => clickHandler(2)}
        >
          일년
        </li>
      ),
    },
  ];
  const clickHandler = (_Id) => {
    setUseIndex(_Id);
  };
  const menuClickHandler = () => {
    props.menuClickHandler();
  };
  return (
    <>
      <ul className={styles.tabs}>
        {menuArr.map((section, index) => {
          return section.title;
        })}
      </ul>
      <TimeBar menuClickHandler={menuClickHandler}></TimeBar>
    </>
  );
}
