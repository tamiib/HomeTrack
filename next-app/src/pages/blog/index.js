import desktopImage from "@assets/images/blog-desktop.png";
import mobileImage from "@assets/images/blog-mobile.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import PaginationContainer from "@/components/PaginationContainer/PaginationContainer";
import { getPaginatedPosts } from "@/lib/api";
import { CONSTANTS } from "@/shared/constants";



const BlogsPage = ({ blogPosts, totalPages }) => {

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
        <BlogPosts blogPosts={blogPosts}/>
        <PaginationContainer currentPage={1} totalPages={totalPages}/>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await getPaginatedPosts(1);
  const totalPages = Math.ceil(data.total / CONSTANTS.pagination.pageSize);

  return {
    props: {
      blogPosts: data.items,
      totalPages
    }
  }
}

export default BlogsPage;
