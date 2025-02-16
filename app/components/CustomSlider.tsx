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

export default function CustomSlider() {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(images[(currentSlide + i) % images.length]);
    }
    return slides;
  };

  return (
    <div className="md:block hidden w-full h-full bg-[#171717] py-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary lg:pb-[80px] pb-[50px] lg:text-[30px] text-[23px] uppercase text-center">
          Gallery
        </h2>{" "}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute sm:left-[-20px] left-0 z-10 text-white text-3xl"
          >
            &#10094;
          </button>
          <div className="flex overflow-hidden w-full justify-center items-center space-x-4">
            {getSlides().map((src, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`overflow-hidden group cursor-pointer w-1/3 transition-transform duration-300 ease-in-out ${
                  index === 1
                    ? "transform scale-110 z-10"
                    : "transform scale-90"
                }`}
              >
                <img
                  src={src}
                  alt={`Image ${currentSlide + index + 1}`}
                  className="transition-all group-hover:scale-125 ease-in-out duration-300 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute sm:right-[-20px] right-0 z-10 text-white text-3xl"
          >
            &#10095;
          </button>
        </div>
        <div className="flex justify-center mt-4 lg:gap-2 gap-1 lg:pt-[40px] pt-[24px]">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`lg:h-4 lg:w-4 h-3 w-3 rounded-full mx-1 cursor-pointer hover:bg-white transition-all ease-in-out duration-200 ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>{" "}
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
  );
}
