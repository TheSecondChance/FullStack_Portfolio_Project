import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

type IconsProps = {
  iconLanguage: string;
  name: string;
  wrapper: string;
  tooltipText: string;
  icon: string;
};

const TechStackIcons = ({
  iconLanguage,
  name,
  wrapper,
  tooltipText,
  icon,
}: IconsProps) => {
  return (
    <div>
      <motion.div
        whileHover={{ x: 2, background: "#fff" }}
        initial={{ x: 5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className={wrapper}
      >
        <StackIcon name={name} style={{ width: 30 }} className={icon} />
        <p className={tooltipText}>{iconLanguage}</p>
      </motion.div>
    </div>
  );
};

export default TechStackIcons;
