"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Pivot as Hamburger } from "hamburger-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full relative z-20 bg-primary shadow-xl">
        <div className="relative flex justify-between items-start gap-2 container mx-auto px-5 py-5  transition-all duration-300 ease-in-out ">
          <div className="absolute lg:hidden block left-0 top-1/2 transform -translate-y-1/2">
            <Hamburger color="white" toggled={isOpen} toggle={setIsOpen} />
          </div>
          <div className="lg:flex hidden gap-3 items-center">
            <a href="https://www.instagram.com/pure.fleet?igsh=cnlqZW01bzExeDlk" target="_blank" className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex items-center justify-center w-7 h-7 border-secondary text-primary rounded-full border-2">
              <Image
                src="/icons/instagram-white.svg"
                width={15}
                height={15}
                alt="instagram"
                className="group-hover:fill-accent"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563542052605&mibextid=LQQJ4d" target="_blank" className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex fill-accent items-center justify-center w-7 h-7 border-secondary text-primary rounded-full border-2">
              <Image
                src="/icons/facebook-white.svg"
                width={9}
                height={9}
                alt="facebook"
                className="group-hover:fill-accent"
              />
            </a>
            <div className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex items-center justify-center w-7 h-7 border-secondary text-primary rounded-full border-2">
              <Image
                src="/icons/youtube-white.svg"
                width={15}
                height={15}
                alt="youtube"
                className="group-hover:fill-accent"
              />
            </div>
          </div>
          <Link
            href="/"
            className={`mx-auto transition-all duration-300 ease-out ${
              isScrolled
                ? "w-[85px] h-[47px]"
                : "w-[85px] h-[47px] lg:w-[171px] lg:h-[94px]"
            }`}
          >
            <Image
              src="/logo.png"
              width={isScrolled ? 85 : 171}
              height={isScrolled ? 47 : 94}
              alt="logo"
            />
          </Link>
          <a
            href="tel:+12242011114"
            className="group lg:flex hidden items-center gap-4"
          >
            <Image src="/icons/phone.svg" width={19} height={18} alt="phone" />
            <p className="group-hover:underline underline-offset-4 text-secondary text-lg">
              +1 (224) 201-1114
            </p>
          </a>
        </div>
      </div>
      <div
        className={` items-center justify-center gap-16 bg-[#161616] pt-5 pb-4 transition-opacity duration-300 ${
          isScrolled ? "hidden" : "lg:flex hidden"
        }`}
      >
        <Link href="/">
          <p className={`nav-link ${router === "/" ? "active-nav" : ""}`}>
            Home
          </p>
        </Link>
        <Link href="/services">
          <p
            className={`nav-link ${router === "/services" ? "active-nav" : ""}`}
          >
            Services
          </p>
        </Link>
        <Link href="/gallery">
          <p
            className={`nav-link ${router === "/gallery" ? "active-nav" : ""}`}
          >
            Gallery
          </p>
        </Link>
        <Link href="/contact">
          <p
            className={`nav-link ${router === "/contact" ? "active-nav" : ""}`}
          >
            Contact
          </p>
        </Link>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        } gap-[30px] font-medium flex justify-center flex-col fixed transition-all ease-in-out duration-300 transform top-0 left-0 w-[371px] px-[16px] h-full bg-secondary`}
      >
        <Link href="/">
          <p
            onClick={handleLinkClick}
            className="text-[23px] text-primary font-medium"
          >
            Home
          </p>
        </Link>
        <Link href="/services">
          <p
            onClick={handleLinkClick}
            className="text-[23px] text-primary font-medium"
          >
            Services
          </p>
        </Link>
        <Link href="/gallery">
          <p
            onClick={handleLinkClick}
            className="text-[23px] text-primary font-medium"
          >
            Gallery
          </p>
        </Link>
        <Link href="/contact">
          <p
            onClick={handleLinkClick}
            className="text-[23px] text-primary font-medium"
          >
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
