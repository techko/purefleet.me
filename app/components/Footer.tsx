import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:pb-[86px] lg:pt-[47px] pb-[50px] pt-[38px] bg-gray-1 text-secondary">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-[40px] lg:justify-between">
          <p className="lg:order-1 order-2 lg:text-[20px] text-[16px]">
            2024 Pure fleet Copyrights
          </p>
          <div className="lg:order-2 order-1 flex gap-3 items-center">
            <a
              href="https://www.instagram.com/pure.fleet?igsh=cnlqZW01bzExeDlk"
              target="_blank"
              className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex items-center justify-center w-7 h-7 border-secondary text-secondary rounded-full border-2"
            >
              <Image
                src="/icons/instagram-white.svg"
                width={15}
                height={15}
                alt="instagram"
                className="group-hover:fill-accent"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563542052605&mibextid=LQQJ4d"
              target="_blank"
              className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex fill-accent items-center justify-center w-7 h-7 border-secondary text-secondary rounded-full border-2"
            >
              <Image
                src="/icons/facebook-white.svg"
                width={9}
                height={9}
                alt="facebook"
                className="group-hover:fill-accent fill-secondary text-secondary stroke-secondary"
              />
            </a>
            <div className="cursor-pointer group hover:border-accent duration-200 ease-in-out transition-all flex items-center justify-center w-7 h-7 border-secondary text-secondary rounded-full border-2">
              <Image
                src="/icons/youtube-white.svg"
                width={15}
                height={15}
                alt="youtube"
                className="group-hover:fill-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
