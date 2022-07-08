import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string | number;
  liked?: boolean;
  poster: string;
  title: string;
  price: number;
  deadline: string;
  like: number;
  total_bid: number;
  bidders: { id: string; image: string }[];
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req);
  res.status(200).json(await import("./collection.json"));
}
