import Container from "../Container";
import styles from "./section.module.sass";

type HomepageSectionType = {
  colored?: boolean;
  children: JSX.Element;
};

function HomepageSection({ colored = false, children }: HomepageSectionType) {
  return (
    <div className={`${styles.homepageSection} ${colored && styles.colored}`}>
      <Container>{children}</Container>
    </div>
  );
}

export default HomepageSection;
