import React from "react";
import styles from "./style.module.css";

const Top = () => {
  return (
    <div className={styles.scrollToTop} id="scroll-to-top">
      <a href="#">
        <img src="/asset/image/top.png" />
      </a>
    </div>
  );
};
export default Top;
