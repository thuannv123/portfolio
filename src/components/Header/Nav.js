import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";
import btnMobile from "../../assets/img/menu.png";
import closeMobile from "../../assets/img/close.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const removeClick = () => {
    setIsActive(false);
  };
  return (
    <div className="navHeader">
      <nav className="navbar">
        <img src={logo} alt="" className="logo" />
        <div className={`desktopMenu ${!isActive ? "" : "active"}`}>
          <button className="removeBtn" onClick={removeClick}>
            <img src={closeMobile} alt="" />
          </button>

          <Link
            onClick={removeClick}
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListen"
          >
            Trang chủ
          </Link>
          <Link
            onClick={removeClick}
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListen"
          >
            Giới thiệu
          </Link>
          <Link
            onClick={removeClick}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListen"
          >
            Portfolio
          </Link>
          <Link
            onClick={removeClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListen"
          >
            Liên hệ
          </Link>
        </div>
        <button className="btnMenumobile" onClick={handleClick}>
          <img src={btnMobile} alt="" />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
