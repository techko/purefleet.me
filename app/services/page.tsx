import Image from "next/image";
import ServicesCard from "../components/ServicesCard";
import ContactForm from "../components/ContactForm";
import ServiceCardMobile from "../components/ServiceCardMobile";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Pure Fleet",
  description:
    "Discover a range of professional Window Tinting, PPF & Car Detailing services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
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
    url: "https://purefleet.me/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Fleet | Our Services",
    description:
      "Discover a range of professional mobile car cleaning services offered by Pure Fleet. From basic washes to full detailing, we have you covered.",
    images: ["https://purefleet.me/gallery3.png"],
  },
};

export default function Services() {
  return (
    <div>
      <div className="md:block hidden">
        <div className="bg-accent py-[54px]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center gap-[20px] text-primary">
              <div className="flex flex-col italic uppercase text-[30px] gap-2">
                <div className="-skew-x-[20deg] font-bold pl-2 px-4 w-fit mx-auto bg-secondary">
                  <p className="skew-x-[20deg] leading-[40px]">Premium</p>
                </div>

                <span className="text-[28px] tracking-widest">
                  Pick up & drop off service - we make difference!
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-[10px]">
                <Image
                  src="/icons/pickup.png"
                  width={118}
                  height={49}
                  alt="pickup"
                />
                <div className="flex flex-col text-primary text-[22px]">
                  <p className=" font-extrabold">
                    Protect your car with 0 miles!
                  </p>
                  <span>
                    We will pick your car from your location, perfrom a
                    meticulous service, and return it to you!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-5">
          <div className="container mx-auto">
            <div className="flex flex-col gap-2 py-[40px]">
              <a
                href="#paint"
                className="cursor-pointer bg-black text-[28px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
              >
                Paint protection film
              </a>
              <a
                href="#window"
                className="cursor-pointer bg-black text-[28px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
              >
                Window tinting
              </a>
              <a
                href="#wrapping"
                className="cursor-pointer bg-black text-[28px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
              >
                Wrapping
              </a>
              <a
                href="#detailing"
                className="cursor-pointer bg-black text-[28px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
              >
                Detailing
              </a>
            </div>
          </div>
        </div>
        <ServicesCard
          id="paint"
          title="Paint protection film"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Protection Film is designed to safeguard your vehicle for rock
                chips, scratches, swirl marks, faded paint, and other road
                elements. It plays a crucial role in maintainin your car's
                appearance and preserving its value.
              </p>
              <p>
                We offer a wide range of options to suit your needs - you can
                coose to protect: <br />
                <b>- THE FRONT, BACK, SPECIFIC PARTS OR THE ENTIRE CAR</b>
              </p>
            </div>
          }
          gallery={[
            "service-gallery-paint-1.png",
            "service-gallery-paint-2.png",
            "service-gallery-paint-3.png",
          ]}
          cover="service-cover-paint.png"
        />
        <ServicesCard
          id="window"
          title="Window tinting"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Transparent sheet made for car's window, to protect interior
                from the sun and heat without affecting the driver's visibility.
                The tinting film comes in black color and the shade percentage
                can vary according to your preferences. We offer a few options:
              </p>
              <p>
                - <strong>CARBON</strong> Window Tint provides excellent UV
                protection and heat rejection with a matte finish that won't
                fade over time. It blocks up to 99% of harmful UV rays and
                reduces interior heat.
              </p>
              <p>
                - <strong>CERAMIC</strong> Window Tint offers superior heat
                rejection and UV protection. It uses nano-ceramic technology
                with long durability to block up to 99% of harmful UV rays and
                significantly reduce glare and heat.
              </p>
            </div>
          }
          gallery={[
            "service-gallery-window-3.png",
            "service-gallery-window-2.png",
            "service-gallery-window-1.png",
          ]}
          cover="service-cover-window.png"
        />
        <ServicesCard
          id="wrapping"
          title="Wrapping"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Give your car a unique and personalized look and protect
                original paint with our high-quality vinyl wraps! This process
                of applying a vinyl film over a vehicle’s exterior will change
                its appearance. It offers a versatile, cost-effective way to
                customize your car's color, finish, and design without permanent
                paint alterations. Car wraps also protect the original paint
                from UV rays, scratches, and minor abrasions, enhancing both
                aesthetics and durability. Choose from various colors, finishes,
                and designs and make your car unique!
              </p>
            </div>
          }
          gallery={[
            "service-gallery-wrapping-1.png",
            "service-gallery-wrapping-2.png",
            "service-gallery-wrapping-3.png",
          ]}
          cover="service-cover-wrapping.png"
        />
        <ServicesCard
          id="detailing"
          title="Detailing"
          subtitle="Interion & Exterior"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Experience the ultimate in car care with our comprehensive
                detailing services! Our expert team meticulously cleans,
                restores, and protects both the interior and exterior of your
                vehicle, using specialized tools and car detailing supplies,
                carefully cleaning every detail providing best results. From
                deep-cleaning carpets and upholstery to polishing and waxing the
                exterior, we ensure your car looks and feels like new. Enjoy a
                pristine finish and enhanced protection with our top-tier
                detailing packages.
              </p>
            </div>
          }
          gallery={[
            "service-cover-detailing-1.png",
            "service-cover-detailing-2.png",
            "service-cover-detailing-3.png",
          ]}
          cover="service-cover-detailing.png"
        />
        
        <div id="contact">
          <ContactForm />
        </div>
      </div>
      <div className="md:hidden block">
        <div
          className="cursor-pointer relative h-[230px] w-full"
          style={{
            backgroundImage: "url('/services-mb.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full opacity-40  inset-0 bg-black"></div>
          <div className="container relative w-full h-full mx-auto px-4 flex items-center justify-center">
            <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
              Our services
            </h2>
          </div>
        </div>
        <div className="bg-gray-5">
          <div className="flex flex-col gap-1 pb-[20px]">
            <a
              href="#paint2"
              className="cursor-pointer bg-black text-[25px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
            >
              Paint protection film
            </a>
            <a
              href="#window2"
              className="cursor-pointer bg-black text-[25px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
            >
              Window tinting
            </a>
            <a
              href="#wrapping2"
              className="cursor-pointer bg-black text-[25px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
            >
              Wrapping
            </a>
            <a
              href="#detailing2"
              className="cursor-pointer bg-black text-[25px] uppercase hover:bg-accent text-center p-2 text-gray-4 hover:text-black duration-300 ease-out transition-all"
            >
              Detailing
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-accent">
          <div className="container mx-auto px-4">
            <div className="py-[40px] flex items-center justify-center flex-col gap-2 text-center">
              <h3 className="bg-primary text-secondary rounded-[12px] px-5 py-2 uppercase text-[22px] tracking-widest">
                We come to you
              </h3>
              <p className="text-[21px] font-bold">
                Protect your car with 0 miles by using Pick up & Drop off
                service featuring enclosed trailer!
              </p>
            </div>
          </div>
        </div>
        <ServiceCardMobile
          id="paint2"
          title="Paint protection film"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Protection Film is designed to safeguard your vehicle for rock
                chips, scratches, swirl marks, faded paint, and other road
                elements. It plays a crucial role in maintainin your car's
                appearance and preserving its value.
              </p>
              <p>
                We offer a wide range of options to suit your needs - you can
                coose to protect: <br />
                <b>- THE FRONT, BACK, SPECIFIC PARTS OR THE ENTIRE CAR</b>
              </p>
            </div>
          }
          gallery={["paint-mobile-gallery1.png", "paint-mobile-gallery2.png"]}
          cover="paint-mobile.png"
        />
        <ServiceCardMobile
          id="window2"
          title="Window tinting"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Transparent sheet made for car's window, to protect interior
                from the sun and heat without affecting the driver's visibility.
                The tinting film comes in black color and the shade percentage
                can vary according to your preferences. We offer a few options:
              </p>
              <p>
                - <strong>CARBON</strong> Window Tint provides excellent UV
                protection and heat rejection with a matte finish that won't
                fade over time. It blocks up to 99% of harmful UV rays and
                reduces interior heat.
              </p>
              <p>
                - <strong>CERAMIC</strong> Window Tint offers superior heat
                rejection and UV protection. It uses nano-ceramic technology
                with long durability to block up to 99% of harmful UV rays and
                significantly reduce glare and heat.
              </p>
            </div>
          }
          gallery={["window-mobile-gallery1.png", "window-mobile-gallery2.png"]}
          cover="window-mobile.png"
        />
        <ServiceCardMobile
          id="wrapping2"
          title="Wrapping"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Give your car a unique and personalized look and protect
                original paint with our high-quality vinyl wraps! This process
                of applying a vinyl film over a vehicle’s exterior will change
                its appearance. It offers a versatile, cost-effective way to
                customize your car's color, finish, and design without permanent
                paint alterations. Car wraps also protect the original paint
                from UV rays, scratches, and minor abrasions, enhancing both
                aesthetics and durability. Choose from various colors, finishes,
                and designs and make your car unique!
              </p>
            </div>
          }
          gallery={[
            "wrapping-mobile-gallery1.png",
            "wrapping-mobile-gallery2.png",
          ]}
          cover="wrapping-mobile.png"
        />
        <ServiceCardMobile
          id="detailing2"
          title="Detailing"
          subtitle="Interion & Exterior"
          description={
            <div className="flex mx-auto flex-col items-center justify-center gap-5 max-w-[930px]">
              <p>
                Experience the ultimate in car care with our comprehensive
                detailing services! Our expert team meticulously cleans,
                restores, and protects both the interior and exterior of your
                vehicle, using specialized tools and car detailing supplies,
                carefully cleaning every detail providing best results. From
                deep-cleaning carpets and upholstery to polishing and waxing the
                exterior, we ensure your car looks and feels like new. Enjoy a
                pristine finish and enhanced protection with our top-tier
                detailing packages.
              </p>
            </div>
          }
          gallery={[
            "detailing-mobile-gallery1.png",
            "detailing-mobile-gallery2.png",
          ]}
          cover="detailing-mobile.png"
        />
        <ContactForm />
      </div>
    </div>
  );
}
