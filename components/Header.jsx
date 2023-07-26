import Head from "../public/Head.svg";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex space-x-[159px] md:space-x-[484px] lg:space-x-[984px] items-end justify-center  w-screen h-[142px] bg-bPurple-800 px-4 py-8">
      <h1 className="font-bold text-[24px] text-white md:text-[36px] lg:text-[40px]">
        <Link href="/">Tekdemir</Link>
      </h1>

      <Link href="../about" rel="noopener noreferrer">
        <Image
          src={Head}
          alt=""
          height={24}
          className="md:h-9 md:w-8 lg:h-9 lg:w-8"
        />
      </Link>
    </div>
  );
};
