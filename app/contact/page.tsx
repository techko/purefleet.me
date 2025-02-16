import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pure Fleet",
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
    url: "https://purefleet.me/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fleet | Our Services",
    description:
      "Discover a range of professional mobile car cleaning services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
    images: ["https://purefleet.me/gallery3.png"],
  },
};

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-1 lg:py-[91px] py-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:gap-[50px] gap-[30px]">
            <p className="uppercase text-center lg:text-[30px] text-[22px] text-secondary">
              How to find us
            </p>
            <div className="w-full lg:h-[501px] h-[400px]">
              <iframe
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.824724447352!2d-87.7683737!3d42.0229242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcfe36202e2ef%3A0xeafde2aef3a952ca!2s7802%20Frontage%20Rd%2C%20Skokie%2C%20IL%2060077%2C%20USA!5e1!3m2!1sen!2s!4v1723650984135!5m2!1sen!2s"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
