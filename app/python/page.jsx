"use client";
import useSWR from "swr";
import axios from "axios";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const Content = () => {
  const { data, error } = useSWR("../api/page2", fetcher);

  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading....</div>;

  const { id, imageUrl, title, body } = data.data;

  return (
    <div className=" lg:my-14 lg:ml-[360px] ml-4 my-8 md:mt-5 md:mx-8">
      {imageUrl && (
        <div
          key={id}
          className="flex flex-col align-start bg-white rounded-[8px] ring-2 ring-bPurple-800 h-[946px] lg:h-[803px] lg:w-[1138px] md:h-[853px] md:w-[680px] w-72 overflow-hidden"
        >
          <img
            src={imageUrl}
            className="lg:max-h-[381px] object-cover lg:object-center h-full w-full rounded-t-lg "
          />
          <span className="lg:p-8">
            <h2 className="justify-end self-stretch pb-[10px] pt-[10px] p-[16px] font-sans font-bold text-[20px] text-bPurple-800 md:text-[32px] lg:text-[36px]">
              {title}
            </h2>
            <p className="justify-end self-stretch p-[16px] pt-[10px] text-[16px] md:text-[20px] lg:text-[24px]">
              {body}
            </p>
          </span>
        </div>
      )}
    </div>
  );
};

export default Content;

