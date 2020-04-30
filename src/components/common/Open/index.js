import React from "react";
import styles from "./style.module.css";

const Open = () => {
  const Openload = () => (
    <div className={styles.open}>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
    </div>
  );
  return <Openload />;
};
export default Open;
