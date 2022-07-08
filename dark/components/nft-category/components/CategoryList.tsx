import { FC } from "react";
import Style from "../../../../styles/dark/category/Category.module.css";
const CategoryList: FC<PropsType> = ({ handleClick, lists }) => {
  const category = lists.map((ct: string, index: number) => (
    <span
      key={index}
      className={Style.category_item}
      onClick={() => handleClick(ct)}
    >
      {ct}
    </span>
  ));
  return (
    <div className="flex flex-col">
      {lists ? category : <span>Category not found :(</span>}
    </div>
  );
};

interface PropsType {
  handleClick: (value: string) => void;
  lists: string[];
}

export default CategoryList;
