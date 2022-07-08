import Image from "next/image";
import backgroundDark from "../../../public/backgrounds/Background-dark.png";
import CAT from "./components/CAT";
import Style from "../../../styles/dark/heading/Heading.module.css";
import Search from "../input/Search";
import Brands from "../brands/Brands";
import { useRouter } from "next/router";
const Heading = () => {
  const { pathname } = useRouter();
  return (
    <div
      className={`relative flex flex-col align-center content-center heading ${Style.Heading}`}
      style={{ overflowX: "hidden" }}
    >
      <div className={Style.background_wrapper}>
        <Image
          src={backgroundDark}
          alt="circles"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={Style.overlay} />
      </div>
      <div
        className="flex flex-col content-center Z-3 space-36"
        style={{ paddingTop: 50 }}
      >
        <CAT />
        <Search />
        <Brands />
      </div>
    </div>
  );
};

export default Heading;
