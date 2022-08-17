import { Link, LinkProps } from "react-router-dom";
import styles from "./link.module.sass";

interface LinkaProps extends LinkProps {}

const LinkButton: React.FC<LinkaProps> = (props) => {
  return (
    <Link {...props} className={styles.link}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
