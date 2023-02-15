import Image from "next/legacy/image";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import FormInput from "./FormInput/FormInput";
import Button from "../Button/Button";
import formImage from "@assets/images/contactForm.png";
import { INPUTS } from "./constants";
import { sendContactForm } from "@/lib/api";

const defaultValues = {
  email: "",
  listingCode: "",
  name: "",
  message: "",
};

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    setFocus,
    formState: { errors, isSubmitted },
  } = useForm({ defaultValues: defaultValues });

  const onSave = async (formValues) => {
    await sendContactForm(formValues);
    reset(defaultValues);
  };

  return (
    <section id="contact-form" className={styles.section}>
      <div className={styles.formContainer}>
        <p className={styles.description}>
          We will try to respond you inside 24 hour time frame.
          <br />
          All of the fields marked with &apos;*&apos; are mandatory.
        </p>

        <form className={styles.form} onSubmit={handleSubmit(onSave)}>
          {INPUTS.map((input) => (
            <FormInput
              key={input.name}
              control={control}
              setValue={setValue}
              setFocus={setFocus}
              formSubmitted={isSubmitted}
              error={errors[input.name]}
              {...input}
            />
          ))}
          <div className={styles.btnContainer}>
            <Button styleClass="green" type="submit" style={{ width: "100%" }}>
              Send inquiry
            </Button>
          </div>
        </form>
      </div>
      <div
        className={styles.image}
        style={{ maxWidth: `${formImage.width}px` }}
      >
        <Image
          src={formImage.src}
          alt="Contact form image"
          layout="responsive"
          width={formImage.width}
          height={formImage.height}
        />
      </div>
    </section>
  );
};

export default ContactForm;
