import { useEffect, useState } from "react";
import Container from "../Container";
import Header from "../Header";
import LinkButton from "../LinkButton";
import styles from "./navbar.module.sass";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      return setIsSticky(window.scrollY >= window.innerHeight - 64);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  });

  return (
    <>
      <Header />
      <nav
        className={`${styles.navbar} ${isSticky ? styles.navbarSticky : ""} `}
      >
        <Container>
          <>
            {isSticky && (
              <section className={styles.navbarContent}>
                <span>A very serious frontend</span>
                <LinkButton to={"/login"}>Login</LinkButton>
              </section>
            )}
          </>
        </Container>
      </nav>
    </>
  );
}
