import { NextResponse } from "next/server";

export async function GET() {
  const content = [
    {
      id: 1,
      imageUrl:
        "https://tms-outsource.com/blog/wp-content/uploads/2023/05/javascript-alternatives.jpg",
      title: "Javascript",
      body: "JavaScript is a versatile and widely used programming language that primarily operates in web browsers",
    },
    {
      id: 2,
      imageUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/452/933/desktop-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo-with-resolution-2880x1800-high-quality-python-logo.jpg",
      title: "Python",
      body: "Python is a high-level, versatile programming language known for its simplicity and readability. It was created in the late 1980s by Guido van Rossum.",
    },
    {
      id: 3,
      imageUrl: "https://reactapp.ir/wp-content/uploads/reactjs.jpg",
      title: "React",
      body: "React is an open-source JavaScript library for building user interfaces. Developed by Facebook, it allows developers to create dynamic and reusable UI components that update efficiently in response to changes in data.",
    },
  ];

  return NextResponse.json({ data: content });
}
