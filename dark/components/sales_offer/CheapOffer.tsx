import collection from "../../../pages/api/collection.json";
import CardMinimal from "../auction_cards/CardMinimal";
import Button from "../buttons/Button";
import Title from "../title/Title";
import Style from "../../../styles/dark/Home.module.css";
const CheapOffer = () => {
  const sortCollection = collection.sort((x, y) => {
    if (x.price > y.price) {
      return 1;
    }
    return -1;
  });

  return (
    <div
      className={`flex flex-col space-24 overflow-hidden border-dark-500 ${Style.zero_padding_border}`}
      style={{ padding: 24, borderRadius: 24 }}
    >
      <Title text="Top NFT at lower price" className="text-heading h5" />
      <div className="flex flex-col overflow-hidden" style={{ width: "100%" }}>
        {sortCollection.slice(0, 4).map((item) => (
          <CardMinimal
            key={item.id}
            {...item}
            renderType="y"
            css={{ margin: "0" }}
            truncateTitle={true}
          />
        ))}
      </div>
      <Button text="Show me more" type="secondary" />
    </div>
  );
};

export default CheapOffer;
