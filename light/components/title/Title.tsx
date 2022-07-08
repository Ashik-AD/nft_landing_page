import { FC } from "react";

const Title: FC<PropsType> = ({ text, className }) => {
  //   const style = {
  //     lineHeight: 4,
  //   };
  return (
    <div className={`${className ? className : ""} text-heading`}>{text}</div>
  );
};
interface PropsType {
  text: string;
  className?: string;
}

export default Title;
