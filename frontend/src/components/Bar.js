import React from "react";
export default function Bar(props) {
  return <li onClick={props.clickHandler}>{props.title}</li>;
}
