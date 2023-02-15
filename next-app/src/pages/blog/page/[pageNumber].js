import desktopImage from "@assets/images/blog-desktop.png";
import mobileImage from "@assets/images/blog-mobile.png";
import PageTitle from "@/components/PageTitle/PageTitle";
import Layout from "@/components/Layout/Layout";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import PaginationContainer from "@/components/PaginationContainer/PaginationContainer";
import { getPaginatedPosts, getTotalPostsNumber } from "@/lib/api";
import { CONSTANTS } from "@/shared/constants";

const BlogsPage = ({ currentPage, blogPosts, totalPages }) => {
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
        <BlogPosts blogPosts={blogPosts} />
        <PaginationContainer
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const pageNumber = params.pageNumber;

  const data = await getPaginatedPosts(pageNumber);
  const totalPages = Math.ceil(data.total / CONSTANTS.pagination.pageSize);

  return {
    props: { currentPage: pageNumber, blogPosts: data.items, totalPages },
  };
}

export async function getStaticPaths() {
  const totalPostsNumber = await getTotalPostsNumber();
  const totalPages = Math.ceil(
    totalPostsNumber / CONSTANTS.pagination.pageSize
  );
  let paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { pageNumber: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export default BlogsPage;
