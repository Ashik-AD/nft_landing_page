import { createRef } from "react";
import Button from "../buttons/Button";
import AppLogo from "../logo/AppLogo";
import NavLink from "./components/NavLink";
import Style from "../../../styles/light/nav/Nav.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { RiMenu3Line } from "react-icons/ri";
const Navigation = () => {
  const mobilNavRef = createRef<HTMLDivElement>();
  const closeNav = () => {
    mobilNavRef.current!.style!.width = "0px";
  };
  const handleOpenNav = () => {
    mobilNavRef.current!.style!.width = "100%";
  };
  return (
    <nav
      className={`absolute flex align-center space-between z-3 ${Style.nav}`}
    >
      {/* LOGO */}
      <AppLogo />
      {/* NAV LINKS */}
      <ul className={`flex space-36 ${Style.nav_link_wrapper}`}>
        <NavLink className="text-gray-1000" />
      </ul>
      {/* ACTION BUTTONS */}
      <div className={`flex space-16 ${Style.act_button}`}>
        <Button text="Contact" type="secondary" />
        <Button text="My account" type="primary" />
      </div>

      {/* Mobile nav icon */}
      <span className={Style.mobile_nav_icon} onClick={handleOpenNav}>
        <RiMenu3Line />
      </span>
      <div className={Style.mobile_nav} ref={mobilNavRef}>
        <button className={Style.close_btn} onClick={closeNav}>
          <VscChromeClose />
        </button>
        <div
          className="relative flex flex-col content-center space-36 p-24"
          style={{ width: "100%" }}
        >
          <div className="flex content-center links_wrapper">
            <ul className={Style.nav_links}>
              <NavLink />
            </ul>
          </div>
          <div className={`flex flex-col space-16 ${Style.btn_group}`}>
            <Button text="Contact" type="secondary" />
            <Button text="My account" type="primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
