const HomeBigSection = () => {
  return (
    <div
      className="lg:block hidden relative w-full "
      style={{
        backgroundImage: "url('/big-backgr.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute h-full w-full inset-0 bg-black opacity-80"></div>
      <div className="relative w-full pt-[64px] pb-[138px]">
        <div className="absolute h-full w-full inset-0 bg-black opacity-50"></div>
        <div className="container relative z-20 mx-auto px-[16px] flex flex-col gap-[130px]">
 
          <div className="flex flex-col gap-[100px] items-center justify-center">
            <p className="text-secondary text-[30px] uppercase">Our services</p>
            <div className="flex items-center justify-between gap-x-[30px] gap-y-[100px]">
              <a
                href="/services#paint"
                className="group cursor-pointer relative h-[372px] w-[293px] rounded-[12px] group"
                style={{
                  backgroundImage: "url('/paint-protect.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full  group-hover:opacity-60 transition-opacity ease-in-out duration-300 inset-0 bg-black opacity-0"></div>

                <div className="min-w-fit transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-69px] left-1/2 transform -translate-x-1/2">
                  <p className="font-bold min-w-fit uppercase text-[20px] group-hover:text-accent">
                    Paint protection film
                  </p>
                  <p className="font-normal text-[14px] w-[68%]">
                    powerful protection keeping the condition of your vehicle's
                    painted surfaces pristine
                  </p>
                </div>
              </a>
              <a
                href="/services#window"
                className="group cursor-pointer relative h-[372px] w-[293px] rounded-[12px] group"
                style={{
                  backgroundImage: "url('/window-tinting.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full  group-hover:opacity-60 transition-opacity ease-in-out duration-300 inset-0 bg-black opacity-0"></div>

                <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-69px] left-1/2 transform -translate-x-1/2">
                  <p className="font-bold uppercase text-[20px] group-hover:text-accent">
                    Window tinting
                  </p>
                  <p className="font-normal text-[14px] w-[68%]">
                    enhance privacy, UV protection and the sleek, custom look of
                    your vehicle
                  </p>
                </div>
              </a>
              <a
                href="/services#wrapping"
                className="group cursor-pointer relative h-[372px] w-[293px] rounded-[12px] group"
                style={{
                  backgroundImage: "url('/detailing.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full  group-hover:opacity-60 transition-opacity ease-in-out duration-300 inset-0 bg-black opacity-0"></div>

                <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-69px] left-1/2 transform -translate-x-1/2">
                  <p className="font-bold uppercase text-[20px] group-hover:text-accent ">
                    Wrapping
                  </p>
                  <p className="font-normal text-[14px] w-[68%]">
                    customize your vehilce's appearance and protect the original
                    paint
                  </p>
                </div>
              </a>
              <a
                href="/services#detailing"
                className="group cursor-pointer relative h-[372px] w-[293px] rounded-[12px] group"
                style={{
                  backgroundImage: "url('/detailing-desktop.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full  group-hover:opacity-60 transition-opacity ease-in-out duration-300 inset-0 bg-black opacity-0"></div>
                <div className="transition-all ease-out duration-300 absolute group-hover:bottom-0 top-auto group-hover:top-1/2 group-hover:translate-y-[-50%] translate-y-0 w-full flex text-center flex-col text-secondary items-center justify-center gap-[16px] bottom-[-69px] left-1/2 transform -translate-x-1/2">
                  <p className="font-bold uppercase text-[20px] group-hover:text-accent ">
                    Detailing
                  </p>
                  <p className="font-normal text-[14px] w-[68%]">
                    enjoy a pristine finish and enhanced protection with our top-tier detailing
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="container mx-auto px-[16px] py-[100px]">
          <div className="flex flex-row items-center justify-between gap-[30px] flex-wrap">
            <div className="flex flex-col items-center justify-center gap-[40px]">
              <img src="/icon-quality.png" alt="icon-quality" />
              <p className="text-center font-bold leading-[30px] uppercase text-[24px] text-accent">
                High quality <br />
                products
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[40px]">
              <img src="/icon-service.png" alt="icon-service" />
              <p className="text-center font-bold leading-[30px] uppercase text-[24px] text-accent">
                Professional <br />
                team
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[40px]">
              <img src="/icon-fast.png" alt="icon-fast" />
              <p className="text-center font-bold leading-[30px] uppercase text-[24px] text-accent">
                Fast <br />
                service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute h-full w-full inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-[16px] py-[100px]">
          <div className="flex relative flex-row items-center">
            <div className="relative z-20 w-[661px] flex flex-col gap-[30px] border border-secondary rounded-[16px] pl-[60px] pt-[30px] pb-[60px] pr-[60px]">
              <p className="text-[30px] text-secondary uppercase">About us</p>
              <p className="text-secondary text-[20px]">
                Pure Fleet is a specialized car service company comprising a
                team of passionate professionals dedicated to cars and their
                meticulous care. We provide comprehensive services tailored to
                your car's needs, utlizing the highest quality products to
                ensure optimal results.
              </p>
            </div>
            <div className="flex-1 relative z-10">
              <div className="absolute h-[402px] w-[731px] left-[-40px] top-1/2 transform -translate-y-1/2">
                <div className="absolute z-20 inset-0 bg-gradient-to-r from-black to-transparent"></div>
                <img
                  src="/about-img.png"
                  alt="about-img"
                  className="w-full h-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBigSection;
