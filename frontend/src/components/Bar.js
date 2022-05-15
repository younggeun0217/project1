import React from "react";
import { Badge } from "antd";
export default function Bar(props) {
  return (
    <li onClick={props.clickHandler}>
      <Badge.Ribbon text={props.detail} placement="start" />
      <p>{props.title}</p>
    </li>
  );
}
