import data from "../data/index.json";
import ProjectCss from "./ProjectsCss.module.css";
import { getImageURL } from "../utils/image-utils";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className={ProjectCss["portfolio--section"]} id="MyProjects">
      <div className={ProjectCss["portfolio--container-box"]}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className={ProjectCss["section--heading"]}
        >
          Projects
        </motion.h2>
      </div>

      <div className={ProjectCss["portfolio--section--container"]}>
        {data?.project?.map((item, index) => (
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.8 }}
            transition={{ type: "spring" }}
            key={index}
            className={ProjectCss["portfolio--section--card"]}
          >
            <div className={ProjectCss["portfolio--section--img"]}>
              <img src={getImageURL(item.src)} alt="project-image" />
            </div>
            <div className={ProjectCss["portfolio--section--card--content"]}>
              <div>
                <h3 className={ProjectCss["portfolio--section--title"]}>
                  {item.title}
                </h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className={ProjectCss["links"]}>
                <a
                  href={item.linkViewDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ProjectCss["text-sm"]} ${ProjectCss["portfolio--link"]}`}
                >
                  View Live Demo
                </a>
                <a
                  href={item.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ProjectCss["text-sm"]} ${ProjectCss["portfolio--link"]}`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
