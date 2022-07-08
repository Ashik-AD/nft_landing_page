import Collection from "../../../pages/api/collection.json";
import Card from "../auction_cards/Card";
import Carousel from "../carousel/Carousel";
import Style from "../../../styles/dark/Home.module.css";
const Auction = () => {
  const collectionList = Collection.map((collection) => (
    <Card key={collection.id} {...collection} />
  ));

  return (
    <div className={Style.carousel_wrapper}>
      <Carousel>{collectionList}</Carousel>
    </div>
  );
};
export default Auction;
