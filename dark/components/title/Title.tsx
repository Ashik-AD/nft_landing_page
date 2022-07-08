import { FC } from "react";

const Title: FC<PropsType> = ({ text, className }) => {
  return (
    <div className={`${className ? className : ""} text-heading text-white`}>
      {text}
    </div>
  );
};
interface PropsType {
  text: string;
  className?: string;
}

export default Title;
