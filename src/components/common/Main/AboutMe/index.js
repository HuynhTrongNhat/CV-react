import React from "react";
import styles from "./style.module.css";

const AboutMe = () => {
  const Introduce = () => (
    <section className={styles.aboutMe} id="aboutMe">
      <div className="title">VỀ TÔI</div>
      <div className={styles.aboutMeContent}>
        <span className={styles.aboutMeContentText}>
          <b>Xin chào, tôi là Huỳnh Trọng Nhật</b> sinh viên của trường Đại học
          Nông Lâm, với khả năng tự học và sáng tạo của mình tôi có đủ kiến thức
          cơ bản để làm việc với một website.
        </span>
        <span className={styles.aboutMeContentText}>
          Tôi tin vào thiết kế người dùng làm trung tâm và luôn mang lại trải
          nghiệm tốt nhất cho họ. Tôi có kiến thức cơ bản và HTML, CSS/SCSS,
          JavaScript và Java.
        </span>
        <span className={styles.aboutMeContentText}>
          Tháng Tám, mùa thu đã về trong màu lá, trong những cơn mưa ngâu dai
          dẳng và trong những tia nắng nhẹ nhàng, len lỏi qua những đám mây
          trắng thả trôi trong chiều gió. Chút nắng mùa hạ gửi vào thu, bây giờ
          đã thôi không bỏng rát, đâu đó phảng phất chút se lạnh của đông sắp
          đến và chút vui tươi của mùa tựu trường. Khi bước chân vào giảng đường
          Đại học tôi cũng có một ước muốn, chính xác là tôi muốn quãng đời sinh
          viên của mình thật rực rỡ, lãng mạn với những ước mơ và hi vọng.
        </span>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.downloadButton}>Tải xuống CV</button>
      </div>

      <div className={styles.skill}>
        <div className={`title ${styles.sub}`}>KỸ NĂNG</div>

        <div className={styles.skillName}>
          <div className={styles.skillTitle}>HTML</div>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressHave}>
              <span>55%</span>
            </div>
          </div>
          <div className={styles.skillDescription}>
            <span style={{ color: "white" }}>Sử dụng được nhiều thẻ html.</span>
          </div>
        </div>

        <div className={styles.skillName}>
          <div className={styles.skillTitle}>CSS/SCSS</div>
          <div className={styles.skillProgress}>
            <div className={`${styles.skillProgressHave} ${styles.stylesheet}`}>
              <span>60%</span>
            </div>
          </div>
          <div className={styles.skillDescription}>
            <span style={{ color: "white" }}>Tạo được một số animation.</span>
          </div>
        </div>

        <div className={styles.skillName}>
          <div className={styles.skillTitle}>JavaScript</div>
          <div className={styles.skillProgress}>
            <div className={`${styles.skillProgressHave} ${styles.javascript}`}>
              <span>35%</span>
            </div>
          </div>
          <div className={styles.skillDescription}>
            <span style={{ color: "white" }}>
              Sử dụng ở mức cơ bản, không biết nhiều.
            </span>
          </div>
        </div>

        <div className={styles.skillName}>
          <div className={styles.skillTitle}>Java</div>
          <div className={styles.skillProgress}>
            <div className={`${styles.skillProgressHave} ${styles.java}`}>
              <span>50%</span>
            </div>
          </div>
          <div className={styles.skillDescription}>
            <span style={{ color: "white" }}>Sử dụng ở mức độ cơ bản.</span>
          </div>
        </div>
      </div>
    </section>
  );
  return <Introduce />;
};
export default AboutMe;
