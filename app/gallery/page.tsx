import { GalleryPage } from "../components/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Pure Fleet",
  description:
    "Discover a range of professional mobile car cleaning services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
  keywords: "mobile car cleaning services, Pure Fleet, car wash, car detailing",
  authors: [{ name: "Pure Fleet" }],
  openGraph: {
    title: "Pure Fleet | Our Services",
    description:
      "Discover a range of professional mobile car cleaning services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
    images: [
      {
        url: "https://purefleet.me/gallery3.png",
        width: 800,
        height: 600,
        alt: "Pure Fleet Gallery Image",
      },
    ],
    url: "https://purefleet.me/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fleet | Our Services",
    description:
      "Discover a range of professional mobile car cleaning services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
    images: ["https://purefleet.me/gallery3.png"],
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
