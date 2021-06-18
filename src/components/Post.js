import React from "react";
import _ from "lodash";

import AuthorName from "./AuthorName";
import Thumbnail from "./Thumbnail";

const Post = ({ post }) => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">Blog Post</strong>
        <h3 className="mb-0">{_.truncate(post.title, { length: 20 })}</h3>
        <div className="mb-1 text-muted">
          <AuthorName authorId={post.userId} />
        </div>
        <p className="card-text mb-auto">
          {_.truncate(post.body, { length: 100 })}
        </p>
        <a href="#top" className="stretched-link">
          Continue reading
        </a>
      </div>
      <Thumbnail />
    </div>
  );
};

export default Post;
