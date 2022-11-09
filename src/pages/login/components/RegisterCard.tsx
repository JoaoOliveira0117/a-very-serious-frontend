import { useState } from "react";
import Api from "../../../api/api";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { FormInput, RegisterFormData } from "../../../types";
import styles from "../login.module.sass";

interface RegisterCardProps {
  setCard: (v: 'register' | 'login') => void;
}

const initialFormState = {
  name: '',
  email: '',
  password: ''
}

const RegisterCard: React.FC<RegisterCardProps> = ({setCard}) => {
  const api = new Api();
  const [formData, setFormData] = useState<RegisterFormData>(initialFormState);

  const formInputs: FormInput[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Username'
    }, 
    {
      type: 'email',
      name: 'email'
    },
    {
      type: 'password',
      name: 'password'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value})


  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.register(formData).then((data)=>console.log(data)).catch((error)=>console.error(error));
  }

  return (
      <>
        <h3 className={styles.title}>Register</h3>
        <form onSubmit={handleSubmit}>
          {formInputs.map(({ type, name, label }) => 
            <Input
              key={name}
              type={type}
              label={label || name}
              name={name}
              id={name}
              onChange={handleChange}
            />
          )}
          <p>
            Already have an account? <span className={styles.link} onClick={()=>setCard('login')}>Login.</span>
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </>
  );
}

export default RegisterCard;
