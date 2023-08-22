import { NextResponse } from "next/server";

export async function GET() {
  const content = {
    id: 3,
    imageUrl:
    "https://reactapp.ir/wp-content/uploads/reactjs.jpg",
    title: "React",
    body: "At its core, React addresses the challenge of managing the complex user interfaces of modern web applications. By breaking down the user interface into reusable components, developers can build applications more efficiently and maintain a consistent design language. This modular approach fosters collaboration among development teams and accelerates the development cycle.",
  };
  return NextResponse.json({ data: content });
}
