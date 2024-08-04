import css from "./Icon.module.scss";
import EmptyHeart from "../images/Icon/EmptyHeart";
import FilledHeart from "../images/Icon/FilledHeart";

const Icon = ({ className, onClick, size = 18, filled }) => {
  const HeartIcon = filled ? FilledHeart : EmptyHeart;
  return (
    <HeartIcon
      className={`${css.icon} ${className}`}
      onClick={onClick}
      width={size}
      height={size}
    />
  );
};

export default Icon;
