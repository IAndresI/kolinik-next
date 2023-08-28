import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await new Promise((resolve, reject) =>
    resolve([
      {
        id: 1,
        author: "Alex Markson",
        authorImage: "/assets/review/1.png",
        authorPosition: "Buisnessman",
        text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
      },
      {
        id: 2,
        author: "Marina Tusa",
        authorImage: "/assets/review/2.png",
        authorPosition: "Housewief",
        text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
      },
      {
        id: 3,
        author: "Elizabet Flow",
        authorImage: "/assets/review/1.png",
        authorPosition: "Buisnesswoman",
        text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
      },
      {
        id: 4,
        author: "Andre Spez",
        authorImage: "/assets/review/2.png",
        authorPosition: "Web developer",
        text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
      },
    ])
  );

  return NextResponse.json({ data });
}
