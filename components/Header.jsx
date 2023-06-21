import Head from '../public/Head.png';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    return (
        <div className="box-content h-[142px] bg-bPurple-800 flex flex-wrap justify-evenly gap-[140px]">
            <h1 className="pt-[82px] font-bold text-[24px] text-white">
                <Link href="/">Tekdemir</Link>
            </h1>

            <Link href="../about" rel="noopener noreferrer">
                <Image src={Head} alt="" height={24} className="pt-[86px]" />
            </Link>
        </div>
    );
};
