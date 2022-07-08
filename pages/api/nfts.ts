import type { NextApiRequest, NextApiResponse } from "next";

import nftsList from "./ethereum.json";

type NFTType = {
  id: number;
  price: number;
  poster: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTType[]>
) {
  res.status(200).json(nftsList);
}
