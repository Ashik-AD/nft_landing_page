import { FC } from "react";
import Image from "next/image";
import Style from "../../../../styles/dark/nft_card/NftCard.module.css";
const AvatarList: FC<{ list: { id: string; image: string }[] }> = ({
  list,
}) => {
  return (
    <div className="flex">
      {list.map((ls, index) => (
        <span
          key={ls.id}
          className="relative"
          style={{ zIndex: index + 1, left: `-${index * 10}px` }}
        >
          <Image
            className={`border-dark-500 ${Style.avatar}`}
            key={ls.id}
            src={ls.image}
            alt="bidder_avatar"
            height={30}
            width={30}
            layout="fixed"
          />
        </span>
      ))}
    </div>
  );
};

export default AvatarList;
