import {
  SettingOutlined,
  NotificationOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="container">
      <div className="Left-navbar">
        <Link to="/" className="Logo-text">
          My<span className="Logo-Text__section">Prof</span>
        </Link>
      </div>
      <div className="Right-navbar">
        <Link className="Right-navbar__section" to="/chart">
          <LineChartOutlined className="icon" />
        </Link>

        <Link className="Right-navbar__section" to="/notifications">
          <NotificationOutlined className="icon" />
        </Link>

        <Link className="Right-navbar__section" to="/settings">
          <SettingOutlined className="icon" />
        </Link>

        <Link className="Right-navbar__section" to="/profile">
          <img className="profile-img" src="/images/1.jpg" alt="Profile-img" />
        </Link>
      </div>
    </div>
  );
}
