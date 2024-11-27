import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import FooterCss from "./FooterCss.module.css";

const Footer = () => {
  return (
    <footer className={FooterCss["footer--container"]}>
      <div className={FooterCss["footer--link--container"]}>
        <div>
          {" "}
          <p>
            Phone Number:{" "}
            <span className={FooterCss["contact_link"]}>+251937076173</span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:eyasusintayehu01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={FooterCss["contact_link"]}>
                eyasusintayehu01@gmail.com
              </span>
            </a>
          </p>
        </div>
        <div className={FooterCss["footer--social--icon"]}>
          <ul>
            <li>
              <a
                href="https://github.com/TheSecondChance"
                className={FooterCss["footer--social--icon"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#333" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eyasu-sintayehu-2995bb324/"
                className={FooterCss["footer--social--icon"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size={30} color="#333" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/eyasu_software"
                className={FooterCss["footer--social--icon"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={30} color="#333" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                className={FooterCss["footer--social--icon"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color="#333" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className={FooterCss["footer--social--icon"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} color="#333" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={FooterCss["divider"]} />
      <div className={FooterCss["footer--content--container"]}>
        <p className={FooterCss["footer--content"]}>Made with 💖 Eyasu</p>
        <p>&copy; 2024 Eyasu Sintayehu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
