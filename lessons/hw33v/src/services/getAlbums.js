export const getAlbums = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/`);
    const data = await res.json();
    return { albums: data };
  } catch (error) {
    console.error(error);
  }
};
