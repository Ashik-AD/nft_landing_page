import EthCard from "../components/eth/EthCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useEffect, useState } from "react";

type Data = Awaited<
  {
    id: number;
    poster: string;
    price: number;
  }[]
>;

export default function SectionScrollEth() {
  const [nft, setNft] = useState<Data | null>(null);
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 12.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      const req = await fetch("http://localhost:3000/api/nfts");
      const nfts: any = await req.json();
      setNft(nfts);
    })();
  }, []);
  if (!nft) return null;

  const lists = nft
    .slice(5, nft.length - 1)
    .map((eth) => <EthCard key={eth.id} {...eth} />);
  return <Slider {...settings}>{lists}</Slider>;
}
