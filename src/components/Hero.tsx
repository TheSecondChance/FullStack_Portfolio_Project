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
            </span>{" "}
            <br />
            Software Engineer
          </h1>
          <p className={HeroSectionCss["hero--section-description"]}>
            Addis Ababa, Ethiopia Building Real Products <br /> For Real
            Clients, Not Just More Projects
          </p>
        </div>
        <button className="btn btn-primary">Get Resume</button>
      </div>
    </section>
  );
};

export default Hero;
