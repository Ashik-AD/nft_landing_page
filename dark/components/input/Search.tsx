import React, { FC } from "react";
import { RiSearchLine } from "react-icons/ri";
import InputWrapper from "./InputWrapper";
import Style from "../../../styles/dark/search/Search.module.css";
import Category from "../nft-category/Category";
const Search: FC = () => {
  return (
    <div className="flex" style={{ padding: "0 20px" }}>
      <InputWrapper className={Style.Search}>
        <>
          <input
            type="text"
            name="nft-search"
            placeholder="Items, collections and creators"
            className={Style.input_main}
          />
          <div style={{ height: "50%", width: 1, background: "#0003" }}></div>
          <div className="flex space-16 align-center space-between">
            <Category />
            <span className="flex text-lg text-purple-1000">
              <RiSearchLine />
            </span>
          </div>
        </>
      </InputWrapper>
    </div>
  );
};

export default Search;
