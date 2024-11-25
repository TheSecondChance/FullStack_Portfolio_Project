import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import HeroSectionCss from "./HeroSectionCss.module.css";
import logo from "../assets/img/hero_img.jpg";

const Hero = () => {
  return (
    <section id="heroSection" className={HeroSectionCss["hero--section"]}>
      <div className={HeroSectionCss["hero--section--img"]}>
        <img src={logo} alt="engineer image" />
      </div>

      <div className={HeroSectionCss["hero--section--content--box"]}>
        <div className={HeroSectionCss["hero--section--content"]}>
          <p className={HeroSectionCss["section--title"]}>Hey, I'm Eyasu</p>
          <h1 className={HeroSectionCss["hero--section--title"]}>
            <span className={HeroSectionCss["hero--section-title--color"]}>
              Full Stack
            </span>
            <br />
            Software Engineer
          </h1>
          <p className={HeroSectionCss["hero--section-description"]}>
            <FaMapMarkerAlt
              color="#EA1B00"
              size={18}
              className={HeroSectionCss["map"]}
            />{" "}
            Addis Ababa, Ethiopia
            <br /> Building Real Products For Real Clients, Not Just More
            Projects
          </p>
        </div>
        <div className={HeroSectionCss["links"]}>
          <a
            className={`${HeroSectionCss["btn-primary"]} ${HeroSectionCss["btn"]}`}
            href="https://docs.google.com/document/d/1i5jSoI27WrAp-CAAYMpVBwaAL9E7dks9pAJQS3CFi2Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="https://github.com/TheSecondChance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/eyasu-sintayehu-2995bb324/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={30} />
          </a>
          <a
            href="https://x.com/eyasu_software"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
