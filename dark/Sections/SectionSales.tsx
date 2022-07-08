import { GetStartedBox } from "../components/get-started/GetStartedBox";
import CheapOffer from "../components/sales_offer/CheapOffer";
import HotOffer from "../components/sales_offer/HotOffer";
import Style from "../../styles/dark/Home.module.css";
const SectionSales = () => {
  return (
    <section
      className={`grid col-3 content-center align-center space-16 ${Style.section_sales}`}
    >
      <HotOffer className={Style.zero_padding} />
      <GetStartedBox />
      <CheapOffer />
    </section>
  );
};

export default SectionSales;
