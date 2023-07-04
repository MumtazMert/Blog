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
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {content.map((item) => (
        <div
          key={item.id}
          className="ring-2 w-80 ring-bPurple-800 rounded-[8px] shadow bg-white"
        >
          <img
            src={item.imageUrl}
            alt=""
            className="object-cover h-48 w-full rounded-t-lg"
          />

          <div className="text-bPurple-800 p-4">
            <h2 className="font-bold text-2xl ">
              <Link href="/content">{item.title}</Link>
            </h2>

            <p className=" text-[16px] ">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
