export const getAlbums = async (params) => {
  console.log(params);
  console.log(params.params.albumId);
  params.albumId;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${params.params.albumId}/photos`
    );
    const data = await res.json();
    return { albums: data };
  } catch (error) {
    console.error(error);
  }
};
