import desktopImage from "@assets/images/blog-desktop.png";
import mobileImage from "@assets/images/blog-mobile.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import PaginationContainer from "@/components/PaginationContainer/PaginationContainer";

const BlogsPage = ({ currentPage }) => {
  return (
    <>
      <Layout activeTab="blog">
        <PageTitle
          title="Stay up-to date with latest news"
          subtitle="blog"
          description="Read all about latest trends in housing market and experience from other marketers"
          desktopImage={desktopImage}
          mobileImage={mobileImage}
        />
        <BlogPosts />
        <PaginationContainer currentPage={currentPage}/>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
    const { params } = context;
    const pageNumber = params.pageNumber;

    return {
        props: {currentPage: pageNumber},
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pageNumber: "2" } },
            { params: { pageNumber: "3" } }
        ],
        fallback: false,
    };
}

export default BlogsPage;