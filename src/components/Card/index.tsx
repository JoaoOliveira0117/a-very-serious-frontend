import styles from "./card.module.sass";

type CardProps = {
  children: JSX.Element;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
