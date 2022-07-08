import type { NextPage } from "next";
import Head from "next/head";
import Auction from "../../dark/components/auction/Auction";
import Divider from "../../dark/components/divider/Divider";
import Footer from "../../dark/components/footer/Footer";
import Heading from "../../dark/components/heading/Heading";
import Thanks from "../../dark/components/message/Thanks";
import Navigation from "../../dark/components/navigation/Nav";
import ScrollTop from "../../dark/components/scrollTop/ScrollTop";
import Title from "../../dark/components/title/Title";
import SectionBucket from "../../dark/Sections/SectionBucket";
import SectionEmoji from "../../dark/Sections/SectionEmoji";
import SectionPopularAuction from "../../dark/Sections/SectionPopularAuction";
import SectionSales from "../../dark/Sections/SectionSales";
import SectionScrollEth from "../../dark/Sections/SectionScrollEth";
import SectionStats from "../../dark/Sections/SectionStats";
import SectionUsers from "../../dark/Sections/SectionUsers";
import styles from "../../styles/dark/Home.module.css";
const DarkHome: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
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

export default DarkHome;
