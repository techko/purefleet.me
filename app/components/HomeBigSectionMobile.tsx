const HomeBigSectionMobile = () => {
  return (
    <div className="w-full h-full lg:hidden block">
      <div className="w-full h-full bg-accent">
        <div className="container mx-auto px-4">
          <div className="py-[80px] flex items-center justify-center flex-col gap-8 text-center">
            <div className="flex flex-col gap-1">
              <p className="text-primary font-extrabold uppercase text-[25px]">
                Premium
              </p>
              <p className="font medium text-[21px] uppercase">
                Pick up & drop off service
              </p>
            </div>
            <h3 className="bg-primary text-secondary rounded-[12px] px-5 py-2 uppercase text-[22px] tracking-widest">
              We come to you
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-[17px] ">
                Experiance the ultimate convenience with our Premium Service. We
                offer a Pick up & Drop off service using an enclosed trailer,
                ensuring your vehicle travels zero miles and remains in pristine
                condition throughout transport.
              </p>
              <p className="text-[17px] ">
                Enjoy a spotless, showroom-quality car without lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-primary">
        <div className="container mx-auto px-4 pt-[80px] pb-[120px]">
          <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
            Our services
          </h2>
          <div className="pt-[80px] flex flex-col gap-24">
            <div
              className="cursor-pointer relative h-[258px] w-full rounded-[12px] group"
              style={{
                backgroundImage: "url('/paint-protect.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full  bg-gradient-to-t from-black to-transparent"></div>

              <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-55px] left-1/2 transform -translate-x-1/2">
                <p className="font-bold uppercase text-[24px]">
                  Paint protection film
                </p>
                <p className="font-normal text-[16px] w-[68%]">
                  powerful protection keeping the condition of your vehicle's
                  painted surfaces pristine
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer relative h-[258px] w-full rounded-[12px] group"
              style={{
                backgroundImage: "url('/window-tinting.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full  bg-gradient-to-t from-black to-transparent"></div>

              <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-55px] left-1/2 transform -translate-x-1/2">
                <p className="font-bold uppercase text-[24px]">
                  Window tinting
                </p>
                <p className="font-normal text-[16px] w-[68%]">
                  enhance privacy, UV protection and the sleek, custom look of
                  your vehicle
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer relative h-[258px] w-full rounded-[12px] group"
              style={{
                backgroundImage: "url('/detailing.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full  bg-gradient-to-t from-black to-transparent"></div>
              <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-55px] left-1/2 transform -translate-x-1/2">
                <p className="font-bold uppercase text-[24px]">Wrapping</p>
                <p className="font-normal text-[16px] w-[68%]">
                  customize your vehilce's appearance and protect the original
                  paint
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer relative h-[258px] w-full rounded-[12px] group"
              style={{
                backgroundImage: "url('/detailing-mobile.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full  bg-gradient-to-t from-black to-transparent"></div>
              <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-55px] left-1/2 transform -translate-x-1/2">
                <p className="font-bold uppercase text-[24px]">Detailing</p>
                <p className="font-normal text-[16px] w-[68%]">
                  enjoy a pristine finish and enhanced protection with our
                  top-tier detailing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-primary ">
        <div className="container mx-auto px-4 py-[100px] border-t border-b border-gray-500">
          <div className="flex flex-row items-start justify-center w-full mx-auto gap-[44px] flex-wrap">
            <div className="w-full flex flex-row items-center  gap-[40px] mx-auto">
              <img
                src="/icon-quality.png"
                alt="icon-quality"
                className="w-[120px]"
              />
              <p className="font-bold leading-[30px] uppercase text-[21px] text-accent">
                High quality <br />
                products
              </p>
            </div>
            <div className="w-full flex flex-row items-center  gap-[40px] mx-auto">
              <img
                src="/icon-service.png"
                alt="icon-service"
                className="w-[120px]"
              />
              <p className="font-bold leading-[30px] uppercase text-[21px] text-accent">
                Professional <br />
                team
              </p>
            </div>
            <div className="w-full flex flex-row items-center  gap-[40px] mx-auto">
              <img src="/icon-fast.png" alt="icon-fast" className="w-[120px]" />
              <p className="font-bold leading-[30px] uppercase text-[21px] text-accent">
                Fast <br />
                service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-primary ">
        <div className="container mx-auto px-4 py-[80px] border-t border-b border-gray-500">
          <div className="flex flex-col gap-[50px]">
            <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
              About us
            </h2>
            <p className="text-secondary text-[17px]">
              Pure fleet is a specialized car service company comprising a team
              of passionate professionals dedicated to cars and their meticulous
              care. We provide comprehensive services tailored to your car's
              needs, utlizing the highest quality products to ensure optimal
              results.
            </p>

            <img
              src="/about-img.png"
              alt="about-img"
              className="w-full h-full relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBigSectionMobile;
