import { NextResponse } from "next/server";

export async function GET() {
  const content = [
    {
      id: 1,
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5ef8be876cd39700069cf7b8/0x0.jpg?format=jpg&crop=1000,909,x0,y260,safe&width=1200",
      title: "Some random things",
      body: "Nam et mauris congue, scelerisque ligula vitae, dictum arcu.",
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg",
      title: "Maya bok yesin",
      body: "Nam et mauris congue, scelerisque ligula vitae, dictum arcu.",
    },
    {
      id: 3,
      imageUrl: "https://i.ytimg.com/vi/_Jp6H1f7xoU/maxresdefault.jpg",
      title: "Maya bok mu yesin ?",
      body: "Nam et mauris congue, scelerisque ligula vitae, dictum arcu.",
    },
  ];

  return NextResponse.json({ data: content });
}
