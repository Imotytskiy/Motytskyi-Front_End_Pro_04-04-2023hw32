export const ROUTES = {
  root: "/",
  albums: (albumsId = "") =>
    albumsId ? `/users/${albumsId}/albums` : "users/:albumsId",
};
