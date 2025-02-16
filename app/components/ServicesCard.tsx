"use client";

import { ReactElement } from "react";
import { useModal } from "../context/ContactModalContext";
import Link from "next/link";

type Props = {
  title: string;
  description: ReactElement;
  gallery: any[];
  cover: any;
  subtitle?: string;
  id?: string;
};

const ServicesCard = ({
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
        <div className="container mx-auto px-4 pb-8 pt-16 flex flex-col gap-0">
          <p className="uppercase text-center text-[30px] text-secondary font-bold">
            {title}
          </p>
          {subtitle && (
            <p className="uppercase text-center text-[30px] text-secondary">
              {subtitle}
            </p>
          )}
        </div>
        <div
          className="min-h-[365px]"
          style={{
            backgroundImage: `url('/${cover}'), linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 150%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "color",
          }}
        >
          <div className="container mx-auto px-4 py-9 text-center text-secondary text-xl">
            {description}
            <div className="mt-9">
              <a onClick={() => openModal()} className="btn cursor-pointer">
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-2">
          <div className="container mx-auto px-4 pt-5 pb-9">
            <div className="max-w-fit mx-auto">
              <div className="flex items-center gap-5 justify-center">
                {gallery.map((item, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
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
              <div className="flex items-center justify-end gap-4 pt-2 cursor-pointer group">
                <Link
                  href="/gallery"
                  className="group-hover:no-underline underline uppercase font-bold text-[20px] text-secondary underline-offset-4"
                >
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
