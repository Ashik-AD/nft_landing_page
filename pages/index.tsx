import type { NextPage } from "next";
import Style from "./../styles/Home.module.css";
import { createRef, useEffect } from "react";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const route = useRouter();
  const videoRef = createRef<HTMLVideoElement>();
  const blackRef = createRef<HTMLDivElement>();
  const whiteRef = createRef<HTMLDivElement>();
  useEffect(() => {
    videoRef.current?.play();
  }, [videoRef]);
  const handleHover = (eve: React.SyntheticEvent, className: string) => {
    eve.currentTarget.classList.add(className);
  };
  const handleLeave = (eve: React.SyntheticEvent, className: string) => {
    eve.currentTarget.classList.remove(className);
  };
  const handleClick = (id: string) => {
    if (id === "dark") {
      whiteRef.current?.classList.add(Style.hide_box);
      blackRef.current?.classList.add(Style.box_expand);
    } else {
      blackRef.current?.classList.add(Style.hide_box);
      whiteRef.current?.classList.add(Style.box_expand);
    }
    setTimeout(() => route.push(id), 500);
  };
  return (
    <div className={Style.luncher}>
      <div className={Style.video_wrapper}>
        <video
          src="./backgrounds/video.mp4"
          controls
          loop
          playsInline
          className={Style.video}
          muted
          ref={videoRef}
        />
      </div>
      <div className="flex z-2" style={{ height: "100%" }}>
        <div
          className={`${Style.box} ${Style.box_white}`}
          ref={whiteRef}
          onMouseOver={(eve) => handleHover(eve, Style.animate_white)}
          onMouseLeave={(eve) => handleLeave(eve, Style.animate_white)}
          onClick={() => handleClick("light")}
        >
          <span className={`text-heading heading-large`}>Light</span>
        </div>
        <div
          className={`${Style.box} ${Style.box_black}`}
          onMouseOver={(eve) => handleHover(eve, Style.animate_black)}
          onMouseLeave={(eve) => handleLeave(eve, Style.animate_black)}
          ref={blackRef}
          onClick={() => handleClick("dark")}
        >
          <span className={`text-heading heading-large`}>Dark</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
