"use client";

import Link from "next/link";
import { ReactElement } from "react";
import { useModal } from "../context/ContactModalContext";

type Props = {
  title: string;
  description: ReactElement;
  gallery: any[];
  cover: any;
  subtitle?: string;
  id?: string;
};

const ServiceCardMobile = ({
  title,
  description,
  subtitle,
  gallery,
  cover,
  id,
}: Props) => {
  const { openModal } = useModal();

  return (
    <div id={id} className="">
      <div className="w-full bg-gray-1">
        <div
          className="cursor-pointer relative h-[178px] w-full"
          style={{
            backgroundImage: `url('/${cover}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full opacity-40  inset-0 bg-black"></div>
          <div className="container relative w-full h-full mx-auto px-4 flex items-center justify-center">
            <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
              {title}
            </h2>
          </div>
        </div>
        <div className="py-[24px] bg-primary">
          <div className="container mx-auto px-4 py-9 text-left text-secondary text-[18px]">
            {description}
          </div>
        </div>
        <div className="bg-gray-2">
          <div className="container mx-auto px-4">
            <div className="max-w-fit mx-auto">
              <div className="flex items-center gap-1 justify-center">
                {gallery.map((item, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <div
                        className="w-[340px] h-[300px] hover:scale-110 transition-all duration-300 ease-in-out"
                        style={{
                          backgroundImage: `url('/${item}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-y-4 items-center justify-between w-full gap-2 cursor-pointer group pt-[30px] pb-[60px]">
              <div className="">
                <a onClick={() => openModal()} className="btn !px-4 !py-1.5 cursor-pointer">
                  Book now
                </a>
              </div>
              <div className="group hover:bg-secondary hover:text-primary transition-all ease-in-out duration-200 text-secondary border-2 border-secondary rounded-[50px] pr-4 pl-4 py-1.5 bg-transparent flex items-center justify-between gap-4">
                <Link
                  href="/gallery"
                  className=" uppercase font-bold text-[18px]  underline-offset-4"
                >
                  Gallery
                </Link>
                <p className="text-[18px] ">&#10095;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardMobile;
