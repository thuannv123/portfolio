import React from "react";
import "./portfolio.scss";
import mockup from "../../assets/img/mockup.png";
import mockup1 from "../../assets/img/mockup1.png";
import mockup2 from "../../assets/img/mockup2.png";
import mockup3 from "../../assets/img/mockup3.png";
import mockup4 from "../../assets/img/mockup4.png";
import mockup5 from "../../assets/img/mockup5.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <span className="desTitle">
        Dưới đây là những dự án tôi đã thực hiện, tập trung vào thiết kế giao
        diện, tối ưu trải nghiệm người dùng và phát triển website trên nền tảng
        như WordPress, Reactjs, Magento2, Html, CSS / Bootstrap, Javascript /
        Library Jquery. Tôi luôn nỗ lực tạo ra những sản phẩm chất lượng, tối ưu
        và đáp ứng nhu cầu khách hàng
      </span>
      <div className="portfolio-project">
        <div className="project">
          <img src={mockup2} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project">
              <span className="big">BIG</span>
              <span className="camera"> CAMERA</span>
            </h4>
            <a href="https://www.bigcamera.co.th/">bigcamera.co.th</a>
          </div>
        </div>
        <div className="project">
          <img src={mockup1} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project">KEDS</h4>
            <a href="https://www.keds.co.th/">keds.co.th</a>
          </div>
        </div>
        <div className="project">
          <img src={mockup3} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project ae">AMERICAN EAGLE</h4>
            <a href="https://aeo.th/">eao.th</a>
          </div>
        </div>
        <div className="project">
          <img src={mockup} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project ae">PP GROUP</h4>
            <a href="https://www.ppgroupthailand.com/th/">
              ppgroupthailand.com
            </a>
          </div>
        </div>
        <div className="project">
          <img src={mockup5} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project cvt">CVT</h4>
            <a href="https://cvti.vn/">cvt.vn</a>
          </div>
        </div>
        <div className="project">
          <img src={mockup4} alt="" className="mockup-img" />
          <div className="text-project">
            <h4 className="title-project v2c">VISA2CANADA</h4>
            <a href="https://v2c.vn/vi/">v2c.vn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
