import Button from "../../../components/Button";
import Input from "../../../components/Input";
import styles from "../login.module.sass";

interface RegisterCardProps {
  setCard: (v: 'register' | 'login') => void;
}

const RegisterCard: React.FC<RegisterCardProps> = ({setCard}) => {
  return (
      <>
        <h3 className={styles.title}>Register</h3>
        <form>
          <Input
            type="text"
            label="Username"
            name="username"
            id="username"
          />
          <Input type="email" label="Email" name="email" id="email" />
          <Input
            type="password"
            label="Password"
            name="password"
            id="password"
          />
          <p>
            Already have an account? <span className={styles.link} onClick={()=>setCard('login')}>Login.</span>
          </p>
          <Button>Submit</Button>
        </form>
      </>
  );
}

export default RegisterCard;
