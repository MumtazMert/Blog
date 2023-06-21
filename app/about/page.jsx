'use client';

import axios from 'axios';
import useSWR from 'swr';

const About = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data, error } = useSWR('http://localhost:3001/about', fetcher);

    if (error) return <div>Request Failed</div>;
    if (!data) return <div>Loading....</div>;

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {data?.map((about) => {
                const { id, title, body } = about ?? {};

                return (
                    <div
                        key={id}
                        className="bg-white box-content rounded-[8px] ring-2 ring-bPurple-800 h-[946px] w-full"
                    >
                        <h2 className="pb-[10px] pt-4 p-4 font-bold text-2xl text-bPurple-800">{title}</h2>
                        <p className="p-[16px]">{body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
