import Link from "next/link";

import { FC } from "react";
import Style from "../../../styles/Button.module.css";
const Button: FC<PropsType> = (props) => {
  const { text, disable, links, handleClick, type } = props;
  const buttonType =
    type === "primary" ? Style.Button_primary : Style.Button_secondary;
  if (links) {
    return (
      <Link
        href={links}
        onClick={handleClick}
        className={`${Style.Button} ${buttonType}`}
      >
        <a>{text}</a>
      </Link>
    );
  }
  return (
    <button
      onClick={handleClick}
      disabled={disable}
      className={`${Style.Button} ${buttonType}`}
    >
      {text}
    </button>
  );
};

interface PropsType {
  text: string;
  type: "primary" | "secondary";
  handleClick?: () => void;
  disable?: boolean;
  links?: string;
}

export default Button;
