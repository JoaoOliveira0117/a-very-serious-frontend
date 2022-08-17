import Container from "../Container";
import styles from "./section.module.sass";

type HomepageSectionType = {
  children: JSX.Element;
};

function HomepageSection({ children }: HomepageSectionType) {
  return (
    <div className={styles.homepageSection}>
      <Container>{children}</Container>
    </div>
  );
}

export default HomepageSection;
