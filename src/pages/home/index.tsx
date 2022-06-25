import Navbar from "../../components/navbar";
import styles from "./home.module.sass";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.bannertwo}>
        <div>This is a very serious frontend</div>
        <p>Seriously.</p>
      </div>
    </>
  );
}
