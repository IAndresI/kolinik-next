import "@/app/styles/scss/globals.scss";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { Poppins, Open_Sans } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Medical center KOLINIK - a private multidisciplinary clinic in St. Petersburg | Official website of the medical center",
  description:
    'Official site of the multidisciplinary medical center "KOLINIK". Private clinic of modern diagnostics and treatment with qualified and experienced doctors in St. Petersburg.',
};
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let messages;

  try {
    messages = (await import(`../i18n/locales/${lang}.json`)).default;
  } catch (error) {}
  return (
    <html lang={lang}>
      <body className={`${poppins.className} ${openSans.className}`}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
