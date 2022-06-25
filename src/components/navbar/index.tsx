import { useEffect, useState } from "react";
import Header from "../header";
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
        {isSticky && <h1>Welcome.</h1>}
      </nav>
    </>
  );
}
