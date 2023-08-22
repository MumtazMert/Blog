import { NextResponse } from "next/server";

export async function GET() {
  const content = {
    id: 1,
    imageUrl:
      "https://tms-outsource.com/blog/wp-content/uploads/2023/05/javascript-alternatives.jpg",
    title: "Javascript",
    body: "Web Development: JavaScript is primarily known for its role in web development. It allows developers to create interactive and dynamic web pages that can respond to user actions without requiring a full page reload. This is achieved through manipulation of the Document Object Model (DOM) and updating the content and appearance of web pages on the fly.User Interface Enhancements JavaScript is used to create smooth animations, transitions, and visual effects that enhance the user experience on websites. Interactive elements like sliders, accordions, and modals are often implemented using JavaScript.",
  };
  return NextResponse.json({ data: content });
}
