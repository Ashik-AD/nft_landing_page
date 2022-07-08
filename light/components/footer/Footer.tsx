import Link from "next/link";
import Style from "../../../styles/light/Home.module.css";
import Button from "../buttons/Button";
import AppLogo from "../logo/AppLogo";
import NavLink from "../navigation/components/NavLink";

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import InputWrapper from "../input/InputWrapper";

export default function Footer() {
  return (
    <footer className={`${Style.footer} border-dark-500`}>
      <div className={Style.footer_box}>
        <AppLogo />
        <div className="flex space-24">
          <span className="text-gray-1000">Support</span>
          <span className="text-gray-1000">Term of service</span>
          <span className="text-gray-1000">License</span>
        </div>
      </div>

      {/* Links box */}
      <div
        className={Style.footer_box}
        style={{ border: "1px solid #0001", borderTop: 0, borderBottom: 0 }}
      >
        <div className="flex flex-col space-36">
          <ul className="flex flex-col space-24">
            <NavLink className="text-dark h7 text-heading" />
          </ul>
          <span style={{ margin: "20px 0" }}>
            <Button text="My account" type="primary" />
          </span>
          <div className="flex space-24">
            <Link href="https://bit.ly/3AtYkI9" target="_blank" title="Github">
              <a className="text-gray-1000 text-lg">
                <FaGithubSquare />
              </a>
            </Link>
            <Link
              href="https://bit.ly/3AkSloH"
              target="_blank"
              title="Linkedin"
            >
              <a className="text-gray-1000 text-lg">
                <FaLinkedin />
              </a>
            </Link>
            <Link href="#" title="Facebook">
              <a className="text-gray-1000 text-lg">
                <FaFacebookSquare />
              </a>
            </Link>
            <Link href="#" title="Twitter">
              <a className="text-gray-1000 text-lg">
                <FaTwitterSquare />
              </a>
            </Link>
            <Link href="#" title="Instagram">
              <a className="text-gray-1000 text-lg">
                <FaInstagramSquare />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Sign up box */}
      <div className={Style.footer_box}>
        <span className="text-medium text-gray-1000">
          Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
          velit, sed egestas in. Id nam semper dolor tellus vulputate eget
          turpis.
        </span>
        <InputWrapper className={Style.input}>
          <>
            <input type="text" name="newsletter" placeholder="Newsletter" />
            <span
              className={`flex align-center h7 text-heading ${Style.btn_sign_in}`}
            >
              Sign in
            </span>
          </>
        </InputWrapper>
      </div>
    </footer>
  );
}
