import Style from "../../../../styles/dark/carousel/CustomArrow.module.css";

const CustomArrow = (props: any) => {
  const { className, onClick } = props;

  return (
    <div
      className={`${className} ${Style.arrow} absolute z-3`}
      onClick={onClick}
    />
  );
};

export default CustomArrow;
