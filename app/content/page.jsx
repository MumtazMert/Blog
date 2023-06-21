'use client';

import axios from 'axios';
import useSWR from 'swr';

const Content = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data, error } = useSWR('http://localhost:3001/content', fetcher);

    if (error) return <div>Request Failed</div>;
    if (!data) return <div>Loading....</div>;

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {data?.map((content) => {
                const { id, imageUrl, title, body } = content ?? {};

                return (
                    <div
                        key={id}
                        className="bg-white box-content  rounded-[8px] ring-2 ring-bPurple-800 h-[946px] w-full"
                    >
                        <img src={imageUrl ?? ''} className="object-cover h-43.75 w-full rounded-t-lg" />
                        <h2 className="pb-[10px] pt-[10px] p-[16px] font-sans font-bold text-[20px] text-bPurple-800">
                            {title ?? ''}
                        </h2>
                        <p className="p-[16px] pt-[10px]">{body ?? ''}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Content;
