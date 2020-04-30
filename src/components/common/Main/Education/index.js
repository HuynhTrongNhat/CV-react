import React from "react";
import styles from "./style.module.css";

const Education = () => {
  return (
    <section classNamee={styles.education} id="education">
      <div className="title">HỌC VẤN</div>
      <div className={styles.educationContainer}>
        <div className={styles.educationYear}>
          <span style={{ position: "relative", padding: "5px" }}>2016</span>
        </div>
        <div className={styles.educationDes}>
          <div className={styles.school}>
            <div className={styles.schoolName}>Trường Đại học Nông Lâm</div>
            <div className={styles.schoolAddress}>
              Khu phố 6, phường Linh Trung, quận Thủ Đức, thành phố Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
