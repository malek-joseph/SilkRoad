import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



const { SubMenu, Item } = Menu;

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate('/login', { replace: true })
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <NavLink to="/">Home</NavLink>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-end">
        <NavLink to="/register">Register</NavLink>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-end">
        <NavLink to="/login">Login</NavLink>
      </Item>

      <SubMenu icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
