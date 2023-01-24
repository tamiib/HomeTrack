import image from "@assets/images/contact.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <Layout activeTab="contact">
      <PageTitle
        title="We are just one mail away!"
        subtitle="contact us"
        description="From newly build villas with amazing views to old stone houses in historic city of Split or Trogir."
        desktopImage={image}
        mobileImage={image}
      />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
