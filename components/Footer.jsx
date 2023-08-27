import Link from "next/link";
import Ins from "../public/instagram.svg";
import Linktd from "../public/linkedin.svg";
import Mail from "../public/mail.svg";
import Twit from "../public/twitter.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="h-[188px] w-full bg-[#201F56]">
        <div className="flex flex-col justify-start">
          <p className="pt-[20px] pl-6 text-white text-[16px] md:text-[20px] md:pl-8 lg:text-[24px] lg:pl-[19%] font-sans font-bold">
            Mümtaz Mert Tekdemir
          </p>
          <p className="pt-[8px] pl-6 text-white text-[16px] md:text-[20px] md:pl-8 lg:text-[24px] lg:pl-[19%] font-sans font-bold">
            Hello There ! If you want to react out just click one of them...
          </p>
        </div>
        <div className="flex flex-row items-start justify-stretch pl-6 pt-2 mt-[10px] space-x-6 md:pl-8 lg:pl-[19%]">
          <Link
            target="_blank"
            href="mailto:mumtazmert@gmail.com"
            rel="noopener noreferrer"
          >
            <Image
              src={Mail}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mumtazmert/"
            rel="noopener noreferrer"
          >
            <Image
              src={Linktd}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/mumtazmert/"
            rel="noopener noreferrer"
          >
            <Image
              src={Ins}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
            />
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/Empirebay5"
            rel="noopener noreferrer"
          >
            <Image
              src={Twit}
              alt=""
              className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
