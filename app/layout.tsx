"use client";

import { useEffect } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ContactModalContext";
import Modal from "./components/ContactModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const gtmId = "GTM-N67Z5WC8"; // Replace with your GTM ID

    // Create GTM script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    // Inject GTM noscript iframe inside body
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, []);

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
    </html>
  );
}
