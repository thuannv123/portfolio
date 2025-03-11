import React from "react";
import "./skill.scss";
import imgLG from "../../assets/img/programming.png";
import imgFrame from "../../assets/img/framework.png";
import imgUi from "../../assets/img/ui.png";
import imgMore from "../../assets/img/more.png";

const Skill = () => {
  return (
    <div className="sectionSkill">
      <div className="skill">
        <h3 className="title">Kỹ năng & Công nghệ</h3>
        <span className="desTitle">
          Với kỹ năng Html, CSS / Bootstrap / Sass/Less, JavaScript, WordPress,
          Magento2, Reactjs tôi đã tham gia vào nhiều dự án từ cá nhân đến doanh
          nghiệp, mang đến những giải pháp thiết kế sáng tạo, hiệu quả và phù
          hợp với từng nhu cầu. Tôi luôn mong muốn học hỏi, mở rộng kiến thức về
          backend để trở thành một Fullstack Developer trong tương lai.
        </span>
        <div className="skillBar">
          <div className="boxSkill">
            <img src={imgLG} alt="" className="imgSkill" />
            <div className="skillText">
              <h4>Ngôn ngữ</h4>
              <p>Html, CSS / Bootstrap / Sass/ Less, JavaScript, PHP </p>
            </div>
          </div>
          <div className="boxSkill">
            <img src={imgFrame} alt="" className="imgSkill" />
            <div className="skillText">
              <h4>Framework & CMS</h4>
              <p>Magento2, WordPress, jQuery, ReactJS</p>
            </div>
          </div>
          <div className="boxSkill">
            <img src={imgUi} alt="" className="imgSkill" />
            <div className="skillText">
              <h4>Thiết kế giao diện</h4>
              <p>Adobe Photoshop, Figma, Adobe XD</p>
            </div>
          </div>
          <div className="boxSkill">
            <img src={imgMore} alt="" className="imgSkill" />
            <div className="skillText">
              <h4>Khác</h4>
              <p>GitHub, Responsive Design, Website Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
