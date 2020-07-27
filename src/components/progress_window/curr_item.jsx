import React from "react";

const CurrentItem = (props) => {
  return <label className={props.class}>{props.message.toString()}</label>;
};

export default CurrentItem;
