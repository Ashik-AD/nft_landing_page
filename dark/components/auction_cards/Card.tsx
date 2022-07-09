import { FC } from "react";
import Image from "next/image";
import Style from "../../../styles/dark/nft_card/NftCard.module.css";
import { RiTimerLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import AvatarList from "./components/AvatarList";
const Card: FC<CollectionType> = (props) => {
  const { poster, title, price, deadline, like, total_bid, bidders, liked } =
    props;
  return (
    <div className={`border-dark-500 ${Style.NFT_card_wrapper}`}>
      <div className={Style.poster_container}>
        <Image
          src={poster}
          alt="nft_poster"
          className={Style.poster}
          layout="fill"
          objectFit="fill"
          style={{ zIndex: 1 }}
        />
      </div>
      <div
        className="flex space-between z-2"
        style={{ alignItems: "baseline" }}
      >
        <h6 style={{ width: "70%" }} className={`text-heading ${Style.title}`}>
          {title}
        </h6>
        <span className={`${Style.bidding_price}`}>{price} eth</span>
      </div>
      <div
        className={`flex space-8 align-center space-between`}
        style={{ margin: "10px 0" }}
      >
        <div className={`${Style.timer}`}>
          <li className="text-medium">
            <RiTimerLine />
          </li>
          {deadline} min left
        </div>
        <span className={`flex space-8 ${Style.like_count}`}>
          <li className={`${liked && "text-orange"} text-medium `}>
            {liked ? <RiHeartFill /> : <RiHeartLine />}
          </li>
          {like}
        </span>
      </div>
      <div
        className="divider"
        style={{ height: 1, background: "#20203c", marginBottom: 10 }}
      ></div>
      <div className="flex space-24 space-between align-center">
        {/* Like count */}
        <div className="flex align-center ">
          <AvatarList list={bidders} />
          <span className={Style.total_bid}>{total_bid} people are biding</span>
        </div>
      </div>
    </div>
  );
};

export interface CollectionType {
  id: string | number;
  liked?: boolean;
  poster: string;
  title: string;
  price: number;
  deadline: string;
  like: number;
  total_bid: number;
  bidders: { id: string; image: string }[];
}

export default Card;
