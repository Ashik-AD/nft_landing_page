import { useState, useMemo } from "react";
import { RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import CategoryList from "./components/CategoryList";
import Style from "../../../styles/dark/category/Category.module.css";
const list = [
  "Digital Artwork NFTs",
  "Music NFTs",
  "Video clips and GIFs",
  "Memes",
  "Avatars or PFPs",
  "Video Game NFTs",
  "Trading Card NFTs",
  "Metaverse Land",
  "Virtual Fashion",
];
const Category = () => {
  const [listOpen, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const handleListClick = (category: string) => {
    setSelectedCategory(category);
    handleCloseList();
  };
  const handleToggleList = () => {
    setOpen((prevState) => !prevState);
  };
  const handleCloseList = () => setOpen(false);

  const categoryList = useMemo(() => {
    return list.filter((el) =>
      el.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);
  return (
    <div className={Style.category}>
      <div className="label flex align-center" style={{ width: 150 }}>
        <input
          type="text"
          name="search-category"
          placeholder="Category"
          className={Style.input}
          onClick={() => setOpen(true)}
          value={selectedCategory}
          onDoubleClick={handleCloseList}
          onChange={(eve) => setSelectedCategory(eve.currentTarget.value)}
        />
        <span
          className={`text-lg ${Style.caret_arrow}`}
          onClick={handleToggleList}
        >
          {listOpen ? <RiCloseLine /> : <RiArrowDropDownLine />}
        </span>
      </div>
      {listOpen && (
        <div className={Style.category_list_wrapper}>
          <CategoryList lists={categoryList} handleClick={handleListClick} />
        </div>
      )}
    </div>
  );
};

export default Category;
