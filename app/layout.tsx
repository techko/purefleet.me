"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ContactModalContext";
import Modal from "./components/ContactModal";
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <Header />
          <div className="lg:pt-[198px] pt-[87px]">{children}</div>
          <Footer />
          <Modal />
        </ModalProvider>
      </body>
      <GoogleTagManager gtmId="GTM-N67Z5WC8" />
    </html>
  );
}
