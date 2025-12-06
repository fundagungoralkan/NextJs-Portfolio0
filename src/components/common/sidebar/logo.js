"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "react-bootstrap";
import "./logo.scss";

const Logo = ({ onClick }) => {
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "en"; // varsayılan: en

  return (
    <Link href={`/${locale}`} passHref>
      <Navbar.Brand className="logo" onClick={onClick}>
        <span>F</span>unda
      </Navbar.Brand>
    </Link>
  );
};

export default Logo;
