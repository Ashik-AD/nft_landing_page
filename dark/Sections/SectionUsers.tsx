import Image from "next/image";
import Button from "../components/buttons/Button";
import Style from "../../styles/dark/Home.module.css";
export default function SectionUsers() {
  const colors =
    "linear-gradient(188.08deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 93.79%), #060714";

  return (
    <section className="relative">
      <div
        className={Style.tools}
        style={{
          background: "#1B1C28",
        }}
      >
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
      </div>
      <div
        className={`grid col-2 align-center ${Style.window}`}
        style={{
          padding: "80px 0 80px 80px",
          background: colors,
          overflowX: "hidden",
        }}
      >
        <div className="flex flex-col space-36 z-1">
          <div className="flex flex-col space-16">
            <span className="overline text-gray-1000">
              Expectation can hurt :){" "}
            </span>
            <h2 className="text-heading">
              Cursus vitae sollicitudin donec nascetur. Join now
            </h2>
          </div>
          <span className="text-gray-1000 text-medium">
            Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
            Mauris vestibulum eros libero amet tincidunt.
          </span>
          <div className="flex space-36 wrap">
            <Button text="Get started" type="primary" />
            <Button text="Learn more" type="secondary" />
          </div>
        </div>

        <div className={`relative hidden z-0  ${Style.user_img}`}>
          <span className={`absolute`} style={{ top: -180, right: -10 }}>
            <Image
              src={"https://i.ibb.co/6vMHh80/users-dark.png"}
              alt="bg-users"
              layout="fixed"
              objectFit="cover"
              height={300}
              width={500}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
