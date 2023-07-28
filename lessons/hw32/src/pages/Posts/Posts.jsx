import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useLoaderData, useNavigation } from "react-router-dom";

export const Posts = () => {
  const { posts } = useLoaderData();
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <NavLink key={post.id} to={ROUTES.post(post.id)} className="post">
              post id: <span className="post-id">{post.id}</span>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
