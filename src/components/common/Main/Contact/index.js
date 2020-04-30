import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const ContactLeft = () => (
    <div className={styles.contactLeft}>
      <ul>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faMobileAlt}
              className={styles.iconAwesome}
            />
          </div>
          <div>
            <span>Điện Thoại</span>
            <p>+84343661688</p>
          </div>
        </li>

        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.iconAwesome} />
          </div>
          <div>
            <span>EMail</span>
            <br />
            <p>nhathuynh25798@gmail.com</p>
          </div>
        </li>

        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className={styles.iconAwesome}
            />
          </div>
          <div>
            <span>Vị Trí</span>
            <br />
            <p>
              Đội 2, thôn Hội Phước, xã Diên Bình, huyện Diên Khánh, tỉnh Khánh
              Hòa
            </p>
            <p>
              58/15 đường số 5, khu phố 2, phường Linh Trung, quận Thủ Đức,
              thành phố Hồ Chí Minh
            </p>
          </div>
        </li>
      </ul>
    </div>
  );

  const ContactRight = () => (
    <div className={styles.contactRight}>
      <div className={styles.contactRightTop}>
        <h3>Mạng xã hội của tôi</h3>
        <div>
          <a href="https://www.facebook.com/huynh.trongnhat">
            <FontAwesomeIcon icon={faFacebook} className={styles.iconSocial} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className={styles.iconSocial} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className={styles.iconSocial} />
          </a>
        </div>
      </div>
      <div className={styles.contactRightBottom}>
        <form action="#" method="get" className={styles.contactForm}>
          <div className={styles.containerFormSub}>
            <div className={styles.formSub}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faUser} className={styles.iconAgile} />
              </div>
              <input
                placeholder="Tên của bạn"
                className={styles.input}
                type="text"
                required=""
                id="name"
                pattern="[A-Za-z. ]{3,30}"
                oninvalid="setCustomValidity('**Tên đăng nhập phải tối thiểu 3 ký tự, tối đa 30 ký tự, không có số, không có ký tự đặc biệt.')"
                oninput="setCustomValidity('')"
              />
            </div>
          </div>
          <div className={styles.containerFormSub}>
            <div className={styles.formSub}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.iconAgile}
                />
              </div>
              <input
                placeholder="Email"
                className={styles.input}
                type="email"
                required=""
                id="emailAddress"
                pattern="^[a-z0-9][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$"
                oninput="setCustomValidity('')"
              />
            </div>
          </div>
          <div className={styles.containerFormSub}>
            <div className={styles.formSub}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className={styles.iconAgile}
                />
              </div>
              <input
                placeholder="Số điện thoại"
                className={styles.input}
                type="text"
                required=""
                id="numberCard"
                pattern="^[0-9]{10,11}$"
                oninvalid="setCustomValidity('**Phone Number phải là ký tự số và tối thiểu 6 ký tự và tối đa 16 ký tự.')"
                oninput="setCustomValidity('')"
              />
            </div>
          </div>
          <div className={styles.containerFormSub}>
            <div className={styles.formSub}>
              <textarea
                className={`${styles.input} ${styles.textAria}`}
                placeholder="Lời nhắn của bạn"
                rows="10"
                cols="30"
              ></textarea>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <section className={styles.Contact} id="contact">
      <div className="title">LIÊN HỆ</div>
      <div className={styles.contactMe}>
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};
export default Contact;
