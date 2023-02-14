import { useForm } from "react-hook-form";
import FormInput from "../ContactForm/FormInput/FormInput";
import Image from "next/legacy/image";

import LoginImage from "@assets/images/login/Login.png";

import styles from "./LoginForm.module.scss";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    setFocus,
    formState: { errors, isSubmitted },
  } = useForm({ defaultValues: { ...defaultValues } });

  const onLogin = () => {
    reset(defaultValues);
  };

  return (
    <section id="login-section" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1>Login</h1>
          <p>Enter your login information and access you profile.</p>
        </div>
        <form className={styles.form} onSumbit={handleSubmit(onLogin)}>
          <FormInput
            name="email"
            label="E-mail*"
            placeholder="example@mail.com"
            type="text"
            control={control}
            setValue={setValue}
            setFocus={setFocus}
            formSubmitted={isSubmitted}
            error={errors.email}
            validations={{
              required: "Please enter your email.",
            }}
          />
          <FormInput
            name="password"
            label="Password*"
            placeholder="*******"
            type="password"
            control={control}
            setValue={setValue}
            setFocus={setFocus}
            formSubmitted={isSubmitted}
            error={errors.password}
            validations={{
              required: "Please enter your password.",
            }}
          />
          <FormInput
            name="rememberPass"
            label="Remember for 30 days"
            control={control}
            setValue={setValue}
            setFocus={setFocus}
            type="checkbox"
          />
        </form>
      </div>
      <div className={styles.image}>
        <Image
          src={LoginImage.src}
          alt="Login image"
          layout="fill"
          objectFit="fit"
        />
      </div>
    </section>
  );
};

export default LoginForm;
