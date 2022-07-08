import Style from "../../../styles/dark/Home.module.css";
import { CgArrowUp } from "react-icons/cg";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (eve: any) => {
      if (eve.currentTarget.scrollY > 400) {
        if (showButton) return;
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [showButton]);

  function scrollToTop() {
    let id: any;
    clearInterval(id);
    id = setInterval(scroll, 10);
    function scroll() {
      if (window.scrollY === 0) {
        clearInterval(id);
      } else {
        document.body.scrollTop = window.scrollY - 50 * 1.5;
        document.documentElement.scrollTop = window.scrollY - 50 * 1.5;
      }
    }
  }

  return (
    <button
      className={Style.scroll_button}
      onClick={scrollToTop}
      style={showButton ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
    >
      <CgArrowUp />
    </button>
  );
}
