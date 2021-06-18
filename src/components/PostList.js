import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post";
import { fetchPosts, postsSelector } from "../slices/posts";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postsSelector);

  //fetch all posts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //prepare rows and columns
  const rows = posts.reduce((rows, post, index) => {
    return (
      (index % 2 === 0
        ? rows.push([post])
        : rows[rows.length - 1].push(post)) && rows
    );
  }, []);

  const renderedList = rows.map((row, index) => {
    return (
      <div key={index} className="row mb-2">
        {row.map((post) => {
          return (
            <div key={post.id} className="col-md-6">
              <Post post={post} />
            </div>
          );
        })}
      </div>
    );
  });

  return <div className="container">{renderedList}</div>;
};

export default PostList;
