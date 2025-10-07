import "./SideBar.css";
import React from "react";
import {
  HomeOutlined,
  LoginOutlined,
  FormOutlined,
  BarChartOutlined,
  FlagOutlined,
  FallOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  UserOutlined,
  UserAddOutlined,
  CalendarOutlined,
  GoldOutlined,
  AreaChartOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function SideBar() {
  return (
    <div className="container-sidebar">
      <div>
        <h3 className="sub-menu">Dashbord</h3>
        <ul className="sub-menu__item">
          <li className="sub-menu__icon active">
            <HomeOutlined /> Home
          </li>
          <li className="sub-menu__icon">
            <BarChartOutlined /> Analytics
          </li>
          <li className="sub-menu__icon">
            <FallOutlined /> Sales
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sub-menu">Quick Menu</h3>
        <ul className="sub-menu__item">
          <li className="sub-menu__icon ">
            <UserOutlined /> User
          </li>
          <li className="sub-menu__icon">
            <UserAddOutlined /> NewUser
          </li>
          <li className="sub-menu__icon">
            <GoldOutlined /> Products
          </li>
          <li className="sub-menu__icon">
            <AreaChartOutlined /> Transaction
          </li>
          <li className="sub-menu__icon">
            <CalendarOutlined /> Calender
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sub-menu">Notification</h3>
        <ul className="sub-menu__item">
          <li className="sub-menu__icon ">
            <MailOutlined /> Mail
          </li>
          <li className="sub-menu__icon">
            <FlagOutlined /> Feedback
          </li>
          <li className="sub-menu__icon">
            <MessageOutlined /> Messages
          </li>
        </ul>
      </div>
      <div>
        <h3 className="sub-menu">Staff</h3>
        <ul className="sub-menu__item">
          <li className="sub-menu__icon ">
            <FormOutlined /> Manage
          </li>
          <li className="sub-menu__icon">
            <CustomerServiceOutlined /> ContactUs
          </li>
          <li className="sub-menu__icon">
            <LoginOutlined /> Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}
