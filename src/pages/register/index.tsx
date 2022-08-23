import { AiOutlineLeft } from "react-icons/ai";
import Button from "../../components/Button";
import Card from "../../components/Card";
import HomepageSection from "../../components/HomepageSection";
import Input from "../../components/Input";
import Link from "../../components/Link";
import LinkButton from "../../components/LinkButton";
import styles from "./register.module.sass";

function Register() {
  return (
    <HomepageSection colored={true}>
      <>
        <div className={styles.backButton}>
          <LinkButton to={"/"}>
            <AiOutlineLeft />
          </LinkButton>
        </div>
        <Card>
          <>
            <h3 className={styles.title}>Register</h3>
            <form>
              <Input type="email" label="Email" name="email" id="email" />
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
                Already have an account? <Link to="/login">Login.</Link>
              </p>
              <Button>Submit</Button>
            </form>
          </>
        </Card>
      </>
    </HomepageSection>
  );
}

export default Register;
