"use client";
import axios from "axios";
import useSWR from "swr";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const Content = () => {
  const { data, error } = useSWR("../api/content", fetcher);

  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading....</div>;

  const { id, imageUrl, title, body } = data.data;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {imageUrl && (
        <div
          key={id}
          className="bg-white box-content  rounded-[8px] ring-2 ring-bPurple-800 h-[946px] w-full"
        >
          <img
            src={imageUrl}
            className="object-cover h-43.75 w-full rounded-t-lg"
          />
          <h2 className="pb-[10px] pt-[10px] p-[16px] font-sans font-bold text-[20px] text-bPurple-800">
            {title}
          </h2>
          <p className="p-[16px] pt-[10px]">{body}</p>
        </div>
      )}
    </div>
  );
};

export default Content;
