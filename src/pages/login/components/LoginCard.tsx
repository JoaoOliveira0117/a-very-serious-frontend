import Button from "../../../components/Button";
import Input from "../../../components/Input";
import styles from "../login.module.sass";

interface LoginCardProps {
  setCard: (v: 'register' | 'login') => void;
}

const LoginCard: React.FC<LoginCardProps> = ({setCard}) => {
  return (
    <>
      <h3 className={styles.title}>Login</h3>
      <form>
        <Input
          type="text"
          label="Username"
          name="username"
          id="username"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
        />
        <p>
          Dont have an account? <span className={styles.link} onClick={()=>setCard('register')}>Register.</span>
        </p>
        <Button>Submit</Button>
      </form>
    </>
  );
}

export default LoginCard;
