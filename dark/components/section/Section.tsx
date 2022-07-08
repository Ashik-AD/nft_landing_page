import { FC } from "react";
import Style from "../../../styles/dark/Home.module.css";
const Section: FC<PropsType> = ({ children, className }) => {
  const styles = {
    maxWidth: 1392,
    margin: "0 auto",
    gap: 118,
  };
  return (
    <section
      className={`grid col-2 align-center ${className ? className : ""} ${
        Style.section
      }`}
      style={styles}
    >
      {children}
    </section>
  );
};

interface PropsType {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default Section;
