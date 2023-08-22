import { NextResponse } from "next/server";

export async function GET() {
  const about = {
    id: 1,
    title: "About Me",
    body: "Hello there ! I'm Mümtaz Mert Tekdemir, and I'm delighted to have you here. Currently residing in the vibrant city of Istanbul, Turkey, I've immersed myself in a world where technology and creativity collide.My journey has led me to become proficient in a range of technologies. From JavaScript to Python, from Node.js to Tailwind CSS, I've cultivated a versatile skill set that allows me to tackle challenges from both the frontend and backend perspectives. With a deep understanding of Flask, Django, and PostgreSQL, I'm able to construct robust and efficient solutions that stand the test of time.Interestingly, my journey into the tech realm started from a rather unexpected point – my background in Linguistics from Istanbul University. This foundation has given me a unique perspective on approaching problems logically and meticulously, allowing me to apply an innovative approach to each project.",
  };
  return NextResponse.json({ data: about });
}
