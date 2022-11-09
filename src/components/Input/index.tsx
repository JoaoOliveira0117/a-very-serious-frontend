import styles from "./input.module.sass";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = (props) => 
  <div className={styles.wrapper}>
    <input className={styles.input} {...props} placeholder="  " />
    <label className={styles.label} htmlFor={props.name}>
      {props.label}
    </label>
  </div>

export default Input;
