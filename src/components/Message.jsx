import React, { useEffect, useState } from "react";

export const Message = ({ msg, type, start, setStart }) => {
  const [animate, setAnimate] = useState("");
  useEffect(() => {
    if (start) {
      setAnimate("animate");
      setStart(false);
    } else {
      setTimeout(() => {
        setAnimate("");
      }, 2000);
    }
  }, [start]);
  return <div className={`message ${animate} ${type}`}>{msg}</div>;
};
