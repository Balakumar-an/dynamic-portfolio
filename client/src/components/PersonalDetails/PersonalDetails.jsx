import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

import "./PersonalDetails.css";

export default function PersonalDetails({
  userImg,
  name,
  socialLinks = [],
  phone,
  email,
  address,
  dob,
  role,
}) {
  const getName = (name) => {
    return `${name.first}${name.middle ? " " + name.middle : ""} ${name.last}`;
  };

  const getPhone = (phone) => {
    return `${phone.countryCode} ${phone.phoneNumber}`;
  };

  const getLocation = (address) => {
    return `${address.city}, ${address.state}, ${address.country}`;
  };

  return (
    <section className="personal-details">
      <div className="user-image-container">
        <img src={userImg} alt="" />
      </div>
      <h3 className="user-name">{getName(name)}</h3>
      <span className="role">{role}</span>
      <div className="social-links">
        {socialLinks.map((link, index) => {
          return (
            <Link to="/" key={`${link.name}-${index}`} className="slink">
              <Icon name={link.name} className="social-icon" />
            </Link>
          );
        })}
      </div>

      <div className="personal-info">
        <div className="info-item">
          <div className="info-icon-container">
            <Icon name="mobile" />
          </div>
          <div className="detail">
            <span>Phone</span>
            <span>{getPhone(phone)}</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon-container">
            <Icon name="email" />
          </div>
          <div className="detail">
            <span>Email</span>
            <span>{email}</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon-container">
            <Icon name="location-pin" />
          </div>
          <div className="detail">
            <span>Location</span>
            <span>{getLocation(address)}</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-container">
            <Icon name="calendar" />
          </div>
          <div className="detail">
            <span>Birthday</span>
            <span>{dob}</span>
          </div>
        </div>
      </div>

      <button className="downdload-cv">
        <Icon name="download" className="download-icon" />
        Download CV
      </button>
    </section>
  );
}
