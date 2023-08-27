"use client";

import axios from "axios";
import useSWR from "swr";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const About = () => {
  const { data, error } = useSWR("../api/about", fetcher);

  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading....</div>;

  const { id, title, body } = data.data;

  return (
    <div className="flex p-4 md:p-8 lg:px-[18%] lg:pt-[5%] items-center">
      {id && (
        <div
          key={id}
          className="flex flex-col items-start bg-white rounded-[8px] ring-2 ring-bPurple-800 h-[946px] w-full lg:w-[100%] lg:max-h-[525px]"
        >
          <h2 className="pb-[10px] pt-4 p-4 font-bold text-2xl text-bPurple-800 md:text-[32px] lg:text-[36px]">
            {title}
          </h2>
          <p className="p-[16px] text-4 md:text-[20px] lg:text-[24px]">
            {body}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
