import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Card from "../../components/Card";
import HomepageSection from "../../components/HomepageSection";
import LinkButton from "../../components/LinkButton";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";
import styles from './login.module.sass';

function Login() {
  const [card, setCard] = useState<'login' | 'register'>('login');

  return (
    <HomepageSection colored={true}>
      <>
        <div className={styles.backButton}>
          <LinkButton to={"/"}>
            <AiOutlineLeft />
          </LinkButton>
        </div>
        <Card>
          <div className={styles.cardContent}>
            { card === 'login' ? 
              <LoginCard setCard={setCard}/> :
              <RegisterCard setCard={setCard}/> 
            }
          </div>
        </Card>
      </>
    </HomepageSection>
  );
}

export default Login;
