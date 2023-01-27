import { CONSTANTS } from "@/shared/constants";

export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const callContentful = async (query) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
};

export const getTotalPostsNumber = async () => {
  // Build the query
  const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;

  // Call out to the API
  const response = await callContentful(query);
  const totalPosts = response.data.blogPostCollection.total
    ? response.data.blogPostCollection.total
    : 0;

  return totalPosts;
};

export const getPaginatedPosts = async (page) => {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0 ? CONSTANTS.pagination.pageSize * skipMultiplier : 0;

  const query = `
    {
        blogPostCollection(limit: ${CONSTANTS.pagination.pageSize}, skip: ${skip}) {
            total
            items {
                sys {
                    id
                }
                title
                date
                description
                thumbnail {
                    url
                    width
                    height
                }
                slug
            }
        }
    }`;

  const respone = await callContentful(query);

  const paginatedPosts = respone.data.blogPostCollection
    ? respone.data.blogPostCollection
    : { total: 0, items: [] };

  return paginatedPosts;
};
