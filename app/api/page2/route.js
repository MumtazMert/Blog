import { NextResponse } from "next/server";

export async function GET() {
  const content = {
    id: 2,
    imageUrl:
    "https://e1.pxfuel.com/desktop-wallpaper/452/933/desktop-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo-with-resolution-2880x1800-high-quality-python-logo.jpg",
    title: "Python",
    body: "Python's popularity in data science and machine learning owes much to libraries such as NumPy, pandas, and scikit-learn. NumPy, for instance, provides a powerful foundation for numerical computing, enabling efficient manipulation of arrays and matrices. Meanwhile, pandas excels in data analysis, offering data structures like DataFrames that facilitate data cleaning, transformation, and exploration. These libraries have solidified Python's status as a go-to language for researchers and data professionals.",
  };
  return NextResponse.json({ data: content });
}
