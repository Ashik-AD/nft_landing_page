import Carousel from "../carousel/Carousel";
import Title from "../title/Title";
import collection from "../../../pages/api/collection.json";
import CardMinimal from "../auction_cards/CardMinimal";
import Button from "../buttons/Button";
import { FC } from "react";
import Style from "../../../styles/dark/Home.module.css";
const HotOffer: FC<{ className: string }> = (className) => {
  return (
    <div
      className={`flex flex-col space-24 border-dark-500 ${Style.hot_offers} ${
        className && className
      } ${Style.zero_padding_border}`}
    >
      <div className={Style.carousel_wrapper}>
        <Title text="Check out the hottest Sale offers" className="flex h5" />

        <Carousel noOfScroll={1} noOfShow={1}>
          {collection.map((cl) => (
            <CardMinimal key={cl.id} {...cl} css={{ margin: "0 0px" }} />
          ))}
        </Carousel>
        <div
          className="flex flex-col"
          style={{ maxWidth: 400, margin: "10px auto", paddingRight: 20 }}
        >
          <Button text="Show me more" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
