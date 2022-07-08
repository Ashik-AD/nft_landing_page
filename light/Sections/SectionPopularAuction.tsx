import { useEffect, useMemo, useState } from "react";
import CardMinimal from "../components/auction_cards/CardMinimal";
import Button from "../components/buttons/Button";
import Title from "../components/title/Title";
import collections from "../../pages/api/collection.json";
import ButtonStyle from "../../styles/Button.module.css";
import Style from "../../styles/light/Home.module.css";

function specification(res: number) {
  return window.matchMedia(`(max-width: ${res}px)`).matches;
}

export default function SectionPopularAuction() {
  const [responsiveRender, setResponsiveRender] = useState<number | null>(null);
  const [perItem, setPerItem] = useState(0);
  const filterCollection = useMemo(
    () =>
      collections.sort((x, y) => {
        if (x.total_bid > y.total_bid) {
          return -1;
        }
        return 1;
      }),
    []
  );

  /**
   * Render items according to the screen resolution
   * Update responsiveRender
   *    > 1400px initial item = 5, show item per 5
   *    < 1400px initial item = 4, show item per 4
   *    < 768px initial item = 3, show item per 3
   *    < 678px initial item = 2, show item per 2
   */
  useEffect(() => {
    if (specification(678)) {
      setResponsiveRender(2);
    } else if (specification(768)) {
      setResponsiveRender(3);
    } else if (specification(1400)) {
      setResponsiveRender(4);
    } else if (specification(3000)) {
      setResponsiveRender(5);
    } else {
      setResponsiveRender(0);
    }
  }, []);

  return (
    <section
      className="flex flex-col content-center space-36"
      style={{ margin: `-0px auto 0 auto !important` }}
    >
      <div className="flex content-center text-center">
        <div className="flex flex-col content-center space-36 text-center">
          <div className="flex content-center flex-col space-16 text-center">
            <span className="overline text-gray-1000">Namaste, Seupakha</span>
            <Title text="Most popular live auctions" className="h1" />
          </div>
          <span className="tags flex space-16 content-center py-24 wrap">
            <button className={ButtonStyle.button_small}>Architecture</button>
            <button className={ButtonStyle.button_small}>Photography</button>
            <button className={ButtonStyle.button_small}>Game</button>
            <button className={ButtonStyle.button_small}>Music</button>
            <button className={ButtonStyle.button_small}>Meme</button>
          </span>
        </div>
      </div>
      <div
        className={`grid space-x-24 py-16 ${Style.popular_auction} ${Style.carousel_wrapper}`}
      >
        {responsiveRender &&
          filterCollection
            .slice(0, responsiveRender + perItem)
            .map((item) => (
              <CardMinimal key={item.id} {...item} css={{ margin: "0 5px" }} />
            ))}
      </div>
      <div className="text-center">
        <Button
          text={
            perItem < filterCollection.length - responsiveRender!
              ? "Show me more"
              : "Show me less"
          }
          type="secondary"
          handleClick={() =>
            perItem < filterCollection.length - responsiveRender!
              ? setPerItem((prevState) => prevState + responsiveRender!)
              : setPerItem(0)
          }
        />
      </div>
    </section>
  );
}
