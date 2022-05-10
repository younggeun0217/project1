import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import styles from "../css/TimeBar.module.css";
export default function TimeBar(props) {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    setBars([
      { title: "d", detail: "d" },
      { title: "2", detail: "3" },
    ]);
  }, []);
  const menuClickHandler = () => {
    props.menuClickHandler();
  };
  return (
    <ul className={styles.tabs}>
      {bars.map((bar) => {
        return (
          <Bar clickHandler={menuClickHandler} key={bar.title} {...bar}></Bar>
        );
      })}
    </ul>
  );
}
