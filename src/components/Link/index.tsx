import { Link as RouterLink, LinkProps } from "react-router-dom";
import styles from "./link.module.sass";

interface LinkaProps extends LinkProps {}

const Link: React.FC<LinkaProps> = (props) => {
  return (
    <RouterLink {...props} className={styles.link}>
      {props.children}
    </RouterLink>
  );
};

export default Link;
