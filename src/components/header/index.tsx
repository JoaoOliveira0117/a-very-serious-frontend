import Container from "../Container";
import LinkButton from "../LinkButton";
import styles from "./header.module.sass";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <section>
          <LinkButton to={"/login"}>Login</LinkButton>
        </section>
        <Container>
          <h1>
            <p>
              This is a very serious frontend
              <p>Seriously.</p>
            </p>
          </h1>
        </Container>
      </header>
    </>
  );
}
