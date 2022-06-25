import styles from "./header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p>This is a very serious frontend</p>
        <p>Seriously.</p>
      </div>
    </header>
  );
}
