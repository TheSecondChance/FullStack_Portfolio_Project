import data from "../data/index.json";
import ProjectCss from "./ProjectsCss.module.css";
import { getImageURL } from "../utils/image-utils";

const Projects = () => {
  return (
    <section className={ProjectCss["portfolio--section"]} id="MyProjects">
      <div className={ProjectCss["portfolio--container-box"]}>
        <h2 className={ProjectCss["section--heading"]}>Projects</h2>
      </div>

      <div className={ProjectCss["portfolio--section--container"]}>
        {data?.project?.map((item, index) => (
          <div key={index} className={ProjectCss["portfolio--section--card"]}>
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
                <p
                  className={`${ProjectCss["text-sm"]} ${ProjectCss["portfolio--link"]}`}
                >
                  {item.linkViewDemo}
                </p>
                <p
                  className={`${ProjectCss["text-sm"]} ${ProjectCss["portfolio--link"]}`}
                >
                  {item.linkGithub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
