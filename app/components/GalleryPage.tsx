"use client";

import { useState } from "react";

const images = [
  "/gallery1.png",
  "/gallery-2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
  "/gallery6.png",
  "/gallery7.png",
  "/gallery8.png",
  "/gallery9.png",
];

export function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="w-full h-full bg-primary sm:bg-[#171717] sm:py-[100px] pb-[60px]">
      <div
        className="cursor-pointer relative h-[198px] w-full sm:hidden block"
        style={{
          backgroundImage: "url('/gallery-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full opacity-40  inset-0 bg-black"></div>
        <div className="container relative w-full h-full mx-auto px-4 flex items-center justify-center">
          <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
            Gallery
          </h2>
        </div>
      </div>
      <p className="text-[#b3b3b3] py-[40px] text-center text-[21px] sm:hidden block">
        we are presenting some of our work
      </p>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 p-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="overflow-hidden group cursor-pointer w-full h-full sm:border-0 border border-[#b3b3b3] sm:rounded-none rounded-[12px]"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="group-hover:scale-125 ease-in-out duration-300 transition-all w-full h-full sm:rounded-none rounded-[12px]"
              />
            </div>
          ))}

          {isOpen && (
            <div
              id="modal-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleClickOutside}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className=" absolute right-2 top-2 text-2x border-accent border w-8 h-8 bg-accent hover:bg-black hover:text-accent transition-all ease-in-out duration-200 text-black rounded-full items-center justify-center flex"
                >
                  <p className="-mt-1">&times;</p>
                </button>
                <button
                  onClick={prevImage}
                  className="absolute md:left-[-40px] left-[10px] border-accent border top-1/2 transform -translate-y-1/2 w-8 h-8 bg-accent hover:bg-black hover:text-accent transition-all ease-in-out duration-200 text-black rounded-full items-center justify-center flex"
                >
                  &#10094;
                </button>
                <img
                  src={images[currentImage]}
                  alt={`Image ${currentImage + 1}`}
                  className="w-full h-full max-w-full max-h-full"
                />
                <button
                  onClick={nextImage}
                  className="absolute md:right-[-40px] right-[10px] border-accent border top-1/2 transform -translate-y-1/2  w-8 h-8 bg-accent hover:bg-black hover:text-accent transition-all ease-in-out duration-200 text-black rounded-full items-center justify-center flex"
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
