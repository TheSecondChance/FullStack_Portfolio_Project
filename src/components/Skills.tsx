import data from "../data/index.json";
import SkillsCss from "./SkillsCss.module.css";
import TechStackIcons from "./TechStackIcons";

const Skills = () => {
  return (
    <section className={SkillsCss["skills--section"]} id="MySkills">
      <div className={SkillsCss["portfolio--container"]}>
        <p className={SkillsCss["section--title"]}>Technical Expertise</p>
        <h2 className={SkillsCss["skills--section--heading"]}>My Skills</h2>
      </div>
      <div className={SkillsCss["skills--section--container"]}>
        {data?.skills?.map((item, index) => (
          <div key={index} className={SkillsCss["skills--section--card"]}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
