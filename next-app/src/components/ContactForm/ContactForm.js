import Image from "next/legacy/image";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import FormInput from "./FormInput/FormInput";
import formImage from '@assets/images/contactForm.png';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section id="contact-form" className={styles.section}>
      <form className={styles.form}>
        <FormInput
          label={"Email *"}
          placeholder="example@mail.com"
          type="email"
          registerProps={{ ...register("email", { required: true }) }}
        />
        <FormInput
          label={"Listing code *"}
          placeholder="4 digit number on listing detail page"
          type="number"
          registerProps={{ ...register("listingCode", { required: true }) }}
        />
        <FormInput
          label={"Name *"}
          placeholder="John Smith"
          type="name"
          registerProps={{ ...register("name", { required: true }) }}
        />
      </form>
      <div className={styles.image} style={{maxWidth: `${formImage.width}px`}}>
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
