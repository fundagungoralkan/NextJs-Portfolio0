"use client";
import React, { useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import LangSwitcher from "../language-switcher/languageSwitcher";
import Logo from "./logo";
import NavItem from "./nav-item";
import StyleSwitcher from "./style-switcher";
import { FaBars } from "react-icons/fa";

const MainMenuBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <Navbar
      expand="lg"
      className="shadow"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1050,
        backgroundColor: "var(--bg-black-100)",
        width: "100%",
      }}
    >
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo tıklanınca menüyü kapatır */}
        <Logo
          onClick={handleCloseOffcanvas}
          style={{ color: "var(--text-black-900)" }}
        />

        <Navbar.Toggle
          aria-controls="main-manubar"
          onClick={handleToggleOffcanvas}
        >
          <FaBars style={{ color: "var(--text-black-900)" }} />
        </Navbar.Toggle>

        <StyleSwitcher />

        <Navbar.Offcanvas
          id="main-manubar"
          aria-labelledby="main-menubar-title"
          placement="end"
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
          style={{
            zIndex: 1051,
            width: "100%",
            backgroundColor: "var(--bg-color-900)",
          }}
          className="d-flex flex-column align-items-center justify-content-center pt-5"
        >
          <Offcanvas.Header>
            <Offcanvas.Title id="main-menubar-title">
              {/* Menü içindeki logo da kapanma tetikler */}
              <Logo
                onClick={handleCloseOffcanvas}
                style={{ color: "var(--text-black-900)" }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="mobile-menu-container">
            <div className="mobile-lang-switcher mb-3">
              <LangSwitcher />
            </div>

            {/* Link'e tıklanınca menüyü kapat */}
            <NavItem
              className="justify-content-center flex-grow-1"
              onLinkClick={handleCloseOffcanvas}
            />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainMenuBar;
