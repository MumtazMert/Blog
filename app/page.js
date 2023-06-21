'use client';

import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';

const Home = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data, error } = useSWR('http://localhost:3001/posts', fetcher);

    if (error) return <div>Request Failed</div>;
    if (!data) return <div>Loading....</div>;

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {data?.map((post) => {
                const { id, imageUrl, title, body } = post ?? {};

                return (
                    <div key={id} className="ring-2 w-80 ring-bPurple-800 rounded-[8px] shadow bg-white">
                        <img src={imageUrl ?? ''} alt="" className="object-cover h-48 w-full rounded-t-lg" />

                        <div className="text-bPurple-800 p-4">
                            <h2 className="font-bold text-2xl ">
                                <Link href="/about">{title ?? ''}</Link>
                            </h2>

                            <p className=" text-[16px] ">{body ?? ''}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Home;
