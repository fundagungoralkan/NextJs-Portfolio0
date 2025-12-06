"use client";

import SideBar from "./side-bar";
import MainMenubar from "./main-menubar";
import "./menu-parent.scss";

const MenuParent = () => {
  return (
    <>
      <div className="sidebar-wrapper d-none d-lg-block">
        <SideBar />
      </div>
      <div className="main-menubar-wrapper d-lg-none">
        <MainMenubar />
      </div>
    </>
  );
};

export default MenuParent;
