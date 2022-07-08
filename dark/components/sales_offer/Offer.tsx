import { FC } from "react";
import collection from "../../../pages/api/collection.json";
import CardMinimal from "../auction_cards/CardMinimal";

const SalesOffer: FC<{ renderDirection?: "x" | "y" }> = ({
  renderDirection = "x",
}) => {
  const lists = collection.map((nft) => (
    <CardMinimal key={nft.id} {...nft} renderType={renderDirection} />
  ));
  return <div className="grid ">{lists}</div>;
};

export default SalesOffer;
