import styles from "./home.module.sass";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <div>
          <div>This is a very serious frontend</div>
          <p>Seriously.</p>
        </div>
      </div>
    </>
  );
}
