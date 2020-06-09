import React, { useState } from "react";
import "./Contact.style.scss";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });

  let handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert("提交完成，謝謝您的聯絡！");
    setFormData({
      company: "",
      name: "",
      phone: "",
      email: "",
    });
  };
  return (
    <motion.div
      className="contactPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-list">
        <div className="contact-list-subtitle">
          <h1>CONTACT US</h1>
          <h4>123@gmail.com</h4>
          <h1>FOLLOW US</h1>
        </div>
        <div className="contact-list-followUs">
          <i className="fab fa-facebook fa-6x"></i>
          <i className="fab fa-instagram-square fa-6x"></i>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="#">公司名稱</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="#">姓名</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="#">電話</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="#">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn contact-btn">
            提交
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
