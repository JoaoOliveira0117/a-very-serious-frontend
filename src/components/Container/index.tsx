import styles from "./container.module.sass";

type ContainerProps = {
  children: JSX.Element;
};

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
