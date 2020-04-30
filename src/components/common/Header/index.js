import React from "react";
import styles from "./style.module.css";

const Header = () => {
  const Menu = () => (
    <header id={"#menu-center"}>
      <a href="#" className={styles.logo}>
        Trọng Nhật
      </a>
      <ul className={"slidebar-menu"} id={"slidebar-menu"}>
        <li>
          <a href="#top">Trang chủ</a>
        </li>
        <li>
          <a href="#aboutMe">Giới thiệu</a>
        </li>
        <li>
          <a href="#education">Học vấn</a>
        </li>
        <li>
          <a href="#interests">Sở thích</a>
        </li>
        <li>
          <a href="#contact">Liên hệ</a>
        </li>
      </ul>
    </header>
  );
  return <Menu />;
};
export default Header;
