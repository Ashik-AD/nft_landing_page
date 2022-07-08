import Image from "next/image";
import { FC } from "react";

const EthCard: FC<PropsType> = ({ poster, price }) => {
  return (
    <div
      className="flex flex-col content-center space-16"
      style={{ width: 89 }}
    >
      <span
        className="relative overflow-hidden"
        style={{
          height: 89,
          width: 89,
          borderRadius: 20,
          boxShadow: "#48484842 0px 12px 15px 0px",
        }}
      >
        <span
          className="absolute"
          style={{ height: "100%", width: "100%", top: 0 }}
        >
          <Image
            src={poster}
            alt="nft-icon"
            objectFit="cover"
            layout="fill"
            quality={100}
          />
        </span>
      </span>
      <span className="text-gray-1000 text-center">{price} ETH</span>
    </div>
  );
};

interface PropsType {
  poster: string;
  price: number;
}

export default EthCard;
