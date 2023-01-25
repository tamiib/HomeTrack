import desktopImage from "@assets/images/blog-desktop.png";
import mobileImage from "@assets/images/blog-mobile.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import PaginationContainer from "@/components/PaginationContainer/PaginationContainer";

const BlogsPage = () => {
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
        <PaginationContainer currentPage={1}/>
      </Layout>
    </>
  );
};

export default BlogsPage;