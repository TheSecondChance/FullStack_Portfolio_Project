import data from "../data/index.json";
import SkillsCss from "./SkillsCss.module.css";
import TechStackIcons from "./TechStackIcons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className={SkillsCss["skills--section"]} id="MySkills">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={SkillsCss["portfolio--container"]}
      >
        <p className={SkillsCss["section--title"]}>Technical Expertise</p>
        <h2 className={SkillsCss["skills--section--heading"]}>My Skills</h2>
      </motion.div>
      <div className={SkillsCss["skills--section--container"]}>
        {data?.skills?.map((item, index) => (
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.8 }}
            transition={{ type: "spring" }}
            key={index}
            className={SkillsCss["skills--section--card"]}
          >
            <div className={SkillsCss["skills--section--card--content"]}>
              <h3 className={SkillsCss["skills--section--title"]}>
                {item.title}
              </h3>
              <p className={SkillsCss["skills--section--description"]}>
                {item.description}
              </p>
            </div>

            <div className={SkillsCss["flex-icon"]}>
              {Object.entries(item.icons ?? {}).map(([key, value]) => (
                <TechStackIcons
                  icon={SkillsCss["icon"]}
                  wrapper={SkillsCss["wrapper"]}
                  tooltipText={SkillsCss["tooltip-text"]}
                  iconLanguage={value}
                  name={key}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
