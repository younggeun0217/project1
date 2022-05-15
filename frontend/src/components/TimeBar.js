import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import styles from "../css/TimeBar.module.css";
export default function TimeBar(props) {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    setBars([
      { title: "뉴스 제목", detail: 60 },
      { title: "뉴스 제목2", detail: 50 },
    ]);
  }, []);
  const menuClickHandler = () => {
    props.menuClickHandler();
  };
  return (
    <ul className={styles.tabs}>
      {bars.map((bar) => {
        return (
          <Bar
            clickHandler={menuClickHandler}
            key={bar.title}
            title={bar.title}
            detail={bar.detail + "회"}
          ></Bar>
        );
      })}
    </ul>
  );
}
