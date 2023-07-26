"use client";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}

const Home = () => {
  const { data, error } = useSWR("/api/posts", fetcher);

  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading....</div>;

  const { data: content } = data;

  if (!Array.isArray(content)) {
    return <div>Invalid Data Format</div>;
  }

  return (
    <div className="m-4 md:m-8 md:space-y-9 lg:mx-[360px] lg:my-14 space-y-4">
      {content.map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-1 bg-white ring-2 ring-bPurple-800 min-h-[150px] md:h-[289px] md:w-[680px] lg:h-[286px] lg:w-[1202px] overflow-hidden lg:flex-row rounded-xl shadow-md"
        >
          <div className="lg:w-[427px] lg:h-full h-full min-w-[192px] md:h-[205px]">
            <img
              src={item.imageUrl}
              alt=""
              className="object-cover h-full w-full md:object-top"
            />
          </div>
          <div className="lg:p-8 px-4">
            <h2 className="text-bPurple-800 font-bold text-2xl inline-block lg:pb-[10px] md:text-[32px] lg:text-[36px] md:px-8 md:py-2">
              <Link href="/content">{item.title}</Link>
            </h2>

            <p className="text-bPurple-800 text-[16px] md:text-[20px] inline-block lg:text-[24px] md:pb-8 md:px-8">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
