import { useForm } from "react-hook-form";
import FormInput from "../ContactForm/FormInput/FormInput";
import Image from "next/legacy/image";
import Link from "next/link";

import LoginImage from "@assets/images/login/Login.png";
import GoogleIcon from "@assets/icons/google.svg";

import styles from "./LoginForm.module.scss";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = ({ type, title, description }) => {
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

  const signup = type === "signup";

  return (
    <section id="login-section" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1>{title}</h1>
          <p>{description}</p>
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
          {signup && (
            <FormInput
              name="confirmPass"
              label="Confirm password*"
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
          )}
          <div className={styles.formLinks}>
            <CheckBox
              name="remember"
              label={
                signup ? (
                  <>
                    I agree to the <span>Terms of use</span>
                  </>
                ) : (
                  <>Remember for 30 days</>
                )
              }
              control={control}
            />
            {!signup && <p className={styles.forgotLink}>Forgot password?</p>}
          </div>
          <div className={styles.buttons}>
            <Button styleClass="green" style={{ width: "100%" }}>
              {signup ? "Sign up" : "Login"}
            </Button>
            <Button
              styleClass="white"
              type="button"
              style={{ width: "100%" }}
              icon={GoogleIcon.src}
            >
              {signup ? "Sign up with Google" : "Sign in with Google"}
            </Button>
          </div>
        </form>
        <div className={styles.bottomText}>
          <p>
            {signup ? "Have already an account?" : "Don't have an account yet?"}
          </p>
          <Link
            href={signup ? "/login" : "/signup"}
            className={styles.registerLink}
          >
            {signup ? "Log in" : "Sign up"}
          </Link>
        </div>
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
