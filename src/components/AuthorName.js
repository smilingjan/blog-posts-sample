import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../slices/posts";

const AuthorName = ({ authorId }) => {
  const { authors } = useSelector(postsSelector);

  const authorName = authors.find((author) => author.authorId === authorId);
  if (!authorName) {
    return null;
  } else {
    return <div>{authorName.AuthorName}</div>;
  }
};
export default AuthorName;
