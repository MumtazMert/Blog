import { NextResponse } from "next/server";

export async function GET() {
  const content = {
    id: 1,
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/5ef8be876cd39700069cf7b8/0x0.jpg?format=jpg&crop=1000,909,x0,y260,safe&width=1200",
    title: "Some random things",
    body: "dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.",
  };
  return NextResponse.json({ data: content });
}
