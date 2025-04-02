import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import fb from "../../assets/img/facebook.png";
import git from "../../assets/img/github.png";
import mail from "../../assets/img/mail.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mydjk83", "template_1m6vz8b", form.current, {
        publicKey: "6OfEktB5TsaUD22Rm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">Liên hệ </h1>
      <span className="contact-des">
        Hãy liên hệ với tôi nếu bạn cần một website đẹp, chuyên nghiệp & chuẩn
        SEO!
      </span>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          className="name"
          placeholder="Họ và tên"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          name="from_email"
        />
        <textarea
          name="message"
          rows={5}
          className="msg"
          placeholder="Lời nhắn"
        ></textarea>
        <button type="submit" value="Send" className="submit-btn">
          Submit
        </button>
      </form>
      <div className="links">
        <a href="https://www.facebook.com/thuan0602/">
          <img src={fb} alt="" className="link-img" />
        </a>
        <a href="mailto:thuannv06022001@gmail.com">
          <img src={mail} alt="" className="link-img" />
        </a>
        <a href="https://github.com/thuannv123/">
          <img src={git} alt="" className="link-img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
