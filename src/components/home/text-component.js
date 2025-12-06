import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";
import Typewriter from "typewriter-effect";
import ButtonComponent from "../common/buttons/button-component";
const TextComponent = () => {
  const t = useTranslations("home");
  const currentPath = usePathname();
  const locale = currentPath.startsWith("/tr") ? "tr" : "en";
  const basePath = locale === "tr" ? "/tr" : "/en";

  // translate 'typing' as an array
  const typingTexts = t.raw("typing");
  return (
    <>
      <h2 className="hello">
        {t("title")} <span className="name">{t("name")}</span>
      </h2>
      <h3 className="my-proffesion">
        {t("my-profession")}
        <span className="typing">
          <Typewriter
            options={{
              strings: typingTexts,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </span>
      </h3>
      <p>{t("description")}</p>
      <ButtonComponent
        title={t("button-hire-me")}
        path={`${basePath}/#contact`}
      />
    </>
  );
};

export default TextComponent;
