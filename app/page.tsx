import { HomePage } from "./components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pure Fleet | Window Tinting & PPF",
  description:
    "Pure Fleet provides top-notch mobile car cleaning services at your convenience. Book now for a pristine vehicle.",
  keywords: "mobile car cleaning, Pure Fleet, car wash, professional cleaning",
  authors: [{name: "Pure Fleet"}],
  openGraph: {
    title: "Pure Fleet | Window Tinting & PPFg",
    description:
      "Pure Fleet provides top-notch Window Tinting,PPF & car detailing services at your convenience. Book now for a pristine vehicle.",
    images: [
      {
        url: "https://purefleet.me/gallery3.png",
        width: 800,
        height: 600,
        alt: "Pure Fleet Gallery Image",
      },
    ],
    url: "https://purefleet.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fleet | Window Tinting & PPF",
    description:
      "Pure Fleet provides top-notch Window Tinting,PPF & car detailing  services at your convenience. Book now for a pristine vehicle.",
    images: ["https://purefleet.me/gallery3.png"],
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
