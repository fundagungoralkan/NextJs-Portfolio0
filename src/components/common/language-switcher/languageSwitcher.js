"use client";
import { Link, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import "./language-switcher.scss";
import React from "react";

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const getHref = () => {
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    return `/${currentPath}`;
  };

  const locales = routing.locales;

  const getFlagCode = (lang) => (lang === "en" ? "us" : lang);

  return (
    <div className="lang-switcher-horizontal">
      {locales.map((lang, index) => (
        <React.Fragment key={lang}>
          {index > 0 && <div className="lang-divider"></div>}
          <Link
            href={getHref()}
            locale={lang}
            className={`lang-switcher-item ${locale === lang ? "active" : ""}`}
          >
            <span className={`fi fi-${getFlagCode(lang)}`}></span>{" "}
            {lang.toUpperCase()}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
