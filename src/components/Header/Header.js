import React from "react";
import "./Header.scss";
import mainImg from "../../assets/img/main.png";

const Header = () => {
  return (
    <div className="header">
      <div className="mainContentHeader">
        <img src={mainImg} alt="" className="mainImg" />
        <div className="contentHeader">
          <h1>
            Hi, Tôi là <span>Alex</span>
          </h1>
          <h3>
            Tôi là <span>Front-End Developer</span>
          </h3>
          <span className="text">
            Với hơn <span>2 năm kinh nghiệm </span> trong thiết kế và phát triển
            giao diện website. Tôi có niềm đam mê với công nghệ và luôn hướng
            đến việc tạo ra những sản phẩm web đẹp mắt, tối ưu và thân thiện với
            người dùng.
          </span>

          <button className="btnHeader">
            Liên hệ tôi
            {/* <img className="chat-btn" src={chat} alt="" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
