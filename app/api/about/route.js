import { NextResponse } from "next/server";

export async function GET() {
  const about = {
    id: 1,
    title: "About Me",
    body: "Nam et mauris congNam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.ula vitae, dictum arcu.Nam et mauris congue, scelerisque ligula vitae, dictum arcu.",
  };
  return NextResponse.json({ data: about });
}
