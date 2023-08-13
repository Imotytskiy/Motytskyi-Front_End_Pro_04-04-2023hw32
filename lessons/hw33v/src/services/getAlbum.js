export const getAlbumById = async ({ params }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${params.getPostById}`
    );
    const data = awaitres.json();
    return { post: data };
  } catch (error) {
    console.error(error);
  }
};
