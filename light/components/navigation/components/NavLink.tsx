import Link from "next/link";
import { CSSProperties, FC } from "react";

const NavLink: FC<PropsType> = ({ className, style }) => {
  const lists: { label: string; url: string }[] = [
    {
      label: "Auctions",
      url: "#",
    },
    {
      label: "Roadmap",
      url: "#",
    },
    {
      label: "Discover",
      url: "#",
    },
    {
      label: "Community",
      url: "#",
    },
  ];
  const render = lists.map((el, index) => (
    <li
      key={index}
      style={{ ...style }}
      className={`text-gray-1000 font-medium ${className ? className : ""}`}
    >
      <Link href={el.url}>
        <a>{el.label}</a>
      </Link>
    </li>
  ));
  return <>{render}</>;
};

interface PropsType {
  className?: string;
  style?: CSSProperties;
}

export default NavLink;
