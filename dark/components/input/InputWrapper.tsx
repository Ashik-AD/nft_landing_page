import { FC } from "react";

const InputWrapper: FC<{ children: JSX.Element; className?: string }> = ({
  children,
  className,
}) => {
  const styles = {
    boxShadow: "0px 25px 75px rgba(6, 7, 20, 0.1)",
  };
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

export default InputWrapper;
