import type { NextPage } from "next";
import Head from "next/head";
import Auction from "../../light/components/auction/Auction";
import Divider from "../../light/components/divider/Divider";
import Footer from "../../light/components/footer/Footer";
import Heading from "../../light/components/heading/Heading";
import Thanks from "../../light/components/message/Thanks";
import Navigation from "../../light/components/navigation/Nav";
import ScrollTop from "../../light/components/scrollTop/ScrollTop";
import Title from "../../light/components/title/Title";
import SectionBucket from "../../light/Sections/SectionBucket";
import SectionEmoji from "../../light/Sections/SectionEmoji";
import SectionPopularAuction from "../../light/Sections/SectionPopularAuction";
import SectionSales from "../../light/Sections/SectionSales";
import SectionScrollEth from "../../light/Sections/SectionScrollEth";
import SectionStats from "../../light/Sections/SectionStats";
import SectionUsers from "../../light/Sections/SectionUsers";
import styles from "../../styles/light/Home.module.css";
const LightHome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demien • Discover, Collect & Sell</title>
      </Head>
      <Navigation />
      <Heading />
      <section className="flex flex-col space-36">
        <Title text="Latest live auctions" className="h4 text-center" />
        <Auction />
      </section>
      <div className="container">
        <SectionBucket />
        <SectionSales />
        <SectionEmoji />
      </div>
      <Divider />
      <div className="container">
        <SectionPopularAuction />
        <Divider />
        <SectionStats />
        <SectionUsers />
      </div>
      <SectionScrollEth />
      <div className="container">
        <Footer />
      </div>
      <Thanks />
      <ScrollTop />
    </div>
  );
};

export default LightHome;
