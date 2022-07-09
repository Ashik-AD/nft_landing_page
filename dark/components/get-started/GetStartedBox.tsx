import Image from "next/image";
import Style from "../../../styles/dark/getstarted/GetStarted.module.css";
import Button from "../buttons/Button";
export const GetStartedBox = () => {
  return (
    <div className="relative">
      <div className={`tools flex space-8 absolute ${Style.dot_wrapper}`}>
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
      </div>
      <div
        className={`relative border-dark-500 flex flex-col content-center ${Style.container}`}
      >
        <span className={Style.hand}>
          <Image
            src={"https://i.ibb.co/kXh05tH/hand.png"}
            alt="hand of crystal"
            layout="responsive"
            height={520}
            width={360}
            style={{ mixBlendMode: "lighten" }}
          />
        </span>

        <div className="flex flex-col space-24">
          <div className="flex flex-col space-16">
            <span className="text-heading text-lg text-white">
              Get started creating & selling your NFTs
            </span>
            <span className="text-gray-1000">
              Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
              Mi est sit.
            </span>
          </div>
          <Button text="Get Started" type="primary" />
        </div>
      </div>
    </div>
  );
};
