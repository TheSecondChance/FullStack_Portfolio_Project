import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import HeroSectionCss from "./HeroSectionCss.module.css";
import logo from "../assets/img/hero_img.jpg";
import resume from "../assets/Eyasu Sintayehu Resume.pdf";
import { motion } from "framer-motion";

const motionVariants = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="heroSection" className={HeroSectionCss["hero--section"]}>
      <div className={HeroSectionCss["hero--section--img"]}>
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          src={logo}
          alt="engineer image"
        />
      </div>

      <div className={HeroSectionCss["hero--section--content--box"]}>
        <div className={HeroSectionCss["hero--section--content"]}>
          <motion.p
            variants={motionVariants(0.1)}
            initial="hidden"
            animate="visible"
            className={HeroSectionCss["section--title"]}
          >
            Hey, I'm Eyasu
          </motion.p>
          <motion.h1
            variants={motionVariants(0.3)}
            initial="hidden"
            animate="visible"
            className={HeroSectionCss["hero--section--title"]}
          >
            <span className={HeroSectionCss["hero--section-title--color"]}>
              Full Stack
            </span>
            <br />
            Software Engineer
          </motion.h1>
          <motion.p
            variants={motionVariants(0.5)}
            initial="hidden"
            animate="visible"
            className={HeroSectionCss["hero--section-description"]}
          >
            <FaMapMarkerAlt
              color="#EA1B00"
              size={18}
              className={HeroSectionCss["map"]}
            />{" "}
            Addis Ababa, Ethiopia
            <br /> I like to develop full-stack web applications, write backend
            logics & love to explore to make my hands dirty on the technologies!
          </motion.p>
        </div>
        <motion.div
          variants={motionVariants(1)}
          initial="hidden"
          animate="visible"
          className={HeroSectionCss["links"]}
        >
          <a
            className={`${HeroSectionCss["btn-primary"]} ${HeroSectionCss["btn"]}`}
            href={resume}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
