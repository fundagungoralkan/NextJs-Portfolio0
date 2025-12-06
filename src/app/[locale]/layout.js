import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/index.scss";
import "@/styles/globals.css";


import { clicker, poppins } from "@/helpers/fonts";

import { ThemeProviderWrapper } from "@/context/ThemeProviderWrapper";
import MenuParent from "@/components/common/sidebar/menu-parent";

export const metadata = {
  title: "Portfolio App",
  description: "Multilingual Portfolio Application",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable} ${clicker.variable}`}
    >
      <body>
        <ThemeProviderWrapper
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <MenuParent />
            {children}
          </NextIntlClientProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
