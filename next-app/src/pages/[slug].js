import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/LoginForm/LoginForm";

const PAGES = {
    login: {
        title: "Login",
        description: "Enter your login information and access you profile."
    },
    signup: {
        title: "Signup",
        description: "Please fill in necessary data and register.",
        type: "signup",
    }
}

const LoginPage = ({ slug }) => {
    return <Layout>
        <LoginForm {...PAGES[slug]}/>
    </Layout>
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "login" } }, { params: { slug: "signup" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
        slug: params.slug,
    }
  }
}

export default LoginPage;