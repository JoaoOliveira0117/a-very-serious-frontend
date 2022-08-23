import Button from "../../components/Button";
import Card from "../../components/Card";
import HomepageSection from "../../components/HomepageSection";
import Input from "../../components/Input";
import Link from "../../components/Link";
import styles from "./login.module.sass";
import { AiOutlineLeft } from "react-icons/ai";
import LinkButton from "../../components/LinkButton";

function Login() {
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
                Dont have an account? <Link to="/register">Register.</Link>
              </p>
              <Button>Submit</Button>
            </form>
          </>
        </Card>
      </>
    </HomepageSection>
  );
}

export default Login;
