import React from "react";
import styles from "./style.module.css";

const Background = () => {
  const clickDown = () => {
    window.location.href = "#aboutMe";
  };
  const Home = () => (
    <div className={styles.homePageContainer}>
      <h1 className={styles.hello}>
        I<span className={styles.regex}>&lt;3</span> people who code
      </h1>
      <div className={styles.homePage}>
        <h1 className={styles.hello}>
          I<span className={styles.regex}>&lt;3</span> people who code
        </h1>
        <div className={styles.center} onClick={clickDown}>
          <div className={styles.down}></div>
        </div>
      </div>
    </div>
  );
  return <Home />;
};
export default Background;
