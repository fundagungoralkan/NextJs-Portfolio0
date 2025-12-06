"use client";
import Logo from "./logo";
import { Navbar } from "react-bootstrap";
import NavItem from "./nav-item";
import "./side-bar.scss";
import LangSwitcher from "../language-switcher/languageSwitcher";
import StyleSwitcher from "./style-switcher";

const SideBar = () => {
  return (
    <aside className={`sidebar `}>     
        <Logo />
      {/* Navbar içeriği */}
      <Navbar className="nav flex-column ">
        <NavItem />
        <LangSwitcher />
        <StyleSwitcher />
      </Navbar>
    </aside>
  );
};

export default SideBar;
