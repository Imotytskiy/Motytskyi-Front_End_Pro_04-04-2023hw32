export const getPostById = async ({ params }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.getPostById}`
    );
    const data = awaitres.json();
    return { post: data };
  } catch (error) {
    console.error(error);
  }
};
