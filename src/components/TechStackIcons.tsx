import StackIcon from "tech-stack-icons";

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
      <div className={wrapper}>
        <StackIcon name={name} style={{ width: 30 }} className={icon} />
        <p className={tooltipText}>{iconLanguage}</p>
      </div>
    </div>
  );
};

export default TechStackIcons;
