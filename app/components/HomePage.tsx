"use client";

import { useModal } from "../context/ContactModalContext";
import ContactForm from "./ContactForm";
import CustomMobileSlider from "./CustomMobileSlider";
import CustomSlider from "./CustomSlider";
import HomeBigSection from "./HomeBigSection";
import HomeBigSectionMobile from "./HomeBigSectionMobile";

export function HomePage() {
  const { openModal } = useModal();

  return (
    <>
      <div>
        <div
          className="relative w-full lg:h-[635px] h-[545px] sm:pb-0 pb-[80px] flex items-center justify-end flex-col sm:justify-center"
          style={{
            backgroundImage: "url('/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center container mx-auto px-[16px]">
            <h1 className="text-secondary lg:text-[75px] lg:leading-normal leading-[53px] text-[53px] font-bold">
              Drive in style, protect for miles
            </h1>
            <p className="lg:text-[30px] text-[17px] lg:pt-0 pt-[30px] text-secondary">
              Protect your car with 0 miles, for a million miles - with our Pick
              up & Drop off service!
            </p>
            <div className="mt-9">
              <a onClick={() => openModal()} className="btn">
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:block hidden bg-accent">
          <div className="container mx-auto px-4">
            <div className="py-[60px] flex items-center justify-center flex-col gap-8 text-center">
              <div className="flex flex-col gap-1">
                <p className="text-primary font-extrabold uppercase text-[36px]">
                  Premium
                </p>
                <p className="font-extrabold text-[24px] uppercase">
                  Pick up & drop off service
                </p>
              </div>
              <h3 className="bg-primary text-secondary rounded-[12px] px-5 py-2 uppercase text-[24px] tracking-widest">
                We come to you!
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[18px] w-[60%] text-center mx-auto">
                  Experiance the ultimate convenience with our Premium Service.
                  We offer a Pick up & Drop off service using an enclosed
                  trailer, ensuring your vehicle travels zero miles and remains
                  in pristine condition throughout transport.
                </p>
                <p className="text-[18px] ">
                  Enjoy a spotless, showroom-quality car without lifting a
                  finger.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomeBigSection />
        <HomeBigSectionMobile />
        <CustomSlider />
        <CustomMobileSlider />
        <ContactForm />
      </div>
    </>
  );
}
