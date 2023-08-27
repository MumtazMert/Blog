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

  const item1 = content.find(item => item.id === 1);
  const item2 = content.find(item => item.id === 2);
  const item3 = content.find(item => item.id === 3);

  return (
    <div className="m-[4%] md:space-y-9 lg:mx-[19%] space-y-4 lg:space-y-[2%] lg:m-[2%]">
      {/* Display Item with ID 1 */}
      <div
        key={item1.id}
        className="flex flex-col bg-white ring-2 ring-bPurple-800 min-h-[150px] w-[100%] md:h-[289px] lg:h-[286px] overflow-hidden lg:flex-row rounded-xl shadow-md"
      >
        <div className="lg:w-[427px] lg:h-full h-full min-w-[427px] md:h-[205px] items-center">
          <img
            src={item1.imageUrl}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="lg:p-[2%] px-4">
          <h2 className="text-bPurple-800 font-bold text-2xl lg:pb-[10px] md:text-[32px] lg:text-[36px] md:px-8 md:py-2">
            <Link href="/javascript">{item1.title}</Link>
          </h2>
          <p className="text-bPurple-800 text-[16px] md:text-[20px] lg:text-[24px] md:pb-8 md:px-8">
            {item1.body}
          </p>
        </div>
      </div>

      {/* Display Item with ID 2 */}
      <div
        key={item2.id}
        className="flex flex-col bg-white ring-2 ring-bPurple-800 min-h-[150px] w-[100%] md:h-[289px] lg:h-[286px] overflow-hidden lg:flex-row rounded-xl shadow-md"
      >
        <div className="lg:w-[427px] lg:h-full h-full min-w-[427px] md:h-[205px] items-center">
          <img
            src={item2.imageUrl}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="lg:p-[2%] px-4">
          <h2 className="text-bPurple-800 font-bold text-2xl lg:pb-[10px] md:text-[32px] lg:text-[36px] md:px-8 md:py-2">
            <Link href="/python">{item2.title}</Link>
          </h2>
          <p className="text-bPurple-800 text-[16px] md:text-[20px] lg:text-[24px] md:pb-8 md:px-8">
            {item2.body}
          </p>
        </div>
      </div>

      {/* Display Item with ID 3 */}
      <div
        key={item3.id}
        className="flex flex-col bg-white ring-2 ring-bPurple-800 min-h-[150px] w-[100%] md:h-[289px] lg:h-[286px] overflow-hidden lg:flex-row rounded-xl shadow-md"
      >
        <div className="lg:w-[427px] lg:h-full h-full min-w-[427px] md:h-[205px] items-center">
          <img
            src={item3.imageUrl}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="lg:p-[2%] px-4">
          <h2 className="text-bPurple-800 font-bold text-2xl lg:pb-[10px] md:text-[32px] lg:text-[36px] md:px-8 md:py-2">
            <Link href="/react">{item3.title}</Link>
          </h2>
          <p className="text-bPurple-800 text-[16px] md:text-[20px] lg:text-[24px] md:pb-8 md:px-8">
            {item3.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

