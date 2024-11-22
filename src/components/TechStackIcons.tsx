import StackIcon from "tech-stack-icons";

type IconsProps = {
  iconLanguage: string;
  name: string;
  flexIconClass: string;
  iconLanguageCss: string;
};

const TechStackIcons = ({
  iconLanguage,
  name,
  flexIconClass,
  iconLanguageCss,
}: IconsProps) => {
  return (
    <div>
      <StackIcon name={name} style={{ width: 50 }} className={flexIconClass} />
      <div className={iconLanguageCss}>
        <p>{iconLanguage}</p>
      </div>
    </div>
  );
};

export default TechStackIcons;
