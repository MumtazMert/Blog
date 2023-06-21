import Link from 'next/link';
import Ins from '../public/instagram.png';
import Linktd from '../public/Linkedin.png';
import Mail from '../public/Mail.png';
import Twit from '../public/Twitter.png';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer>
            <div className="box-content h-[188px] w-full bg-[#201F56]">
                <p className="pt-[20px] pl-[24px] text-white text-[16px] font-sans font-bold">Mümtaz Mert Tekdemir</p>
                <p className="pt-[8px] pl-[24px] text-white text-[16px] font-sans font-bold">
                    Borem ipsum dolor sit amet /n asdasfsdfgvsdvsdcv
                </p>
                <div className="flex justify-start pt-[18px] pl-7 gap-6">
                    <Link target="_blank" href="mailto:mumtazmert@gmail.com" rel="noopener noreferrer">
                        <Image src={Mail} alt="" height={18} />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/mumtazmert/" rel="noopener noreferrer">
                        <Image src={Linktd} alt="" height={21} />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/mumtazmert/" rel="noopener noreferrer">
                        <Image src={Ins} alt="" className=" " />
                    </Link>
                    <Link target="_blank" href="https://twitter.com/Empirebay5" rel="noopener noreferrer">
                        <Image src={Twit} alt="" className="" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
