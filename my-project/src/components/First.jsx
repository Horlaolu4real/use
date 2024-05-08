import { useState } from "react";
import styles from "./first.module.css";

export default function First() {
  const [first, setFirst] = useState(0);
  const changeFirst = () => {
    setFirst(first + 1);
  };
  const changeSecond = () => {
    setFirst(first - 1);
  };
  return (
    <div className={styles.header}>
      This is a parent div
      <h1>First count is: {first}</h1>
      <button className={styles.btn} onClick={changeFirst}>
        Increase First
      </button>
      <button className={styles.btr} onClick={changeSecond}>
        Decrease Second
      </button>
    </div>
  );
}
