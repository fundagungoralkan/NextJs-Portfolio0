import Link from "next/link";
import React from "react";

const ButtonComponent = ({ title, path, download, ...props }) => {
  // Her harfi span içine al
  const letterSpans = title.split("").map((char, index) => (
    <span key={index} className="letter">
      {char}
    </span>
  ));

  return (
    <Link
      href={path}
      download={download ? "" : undefined}
      {...props}
      className="btn"
    >
      {letterSpans}
    </Link>
  );
};

export default ButtonComponent;
