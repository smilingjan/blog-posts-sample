import React from "react";

const Thumbnail = () => {
  return (
    <div className="col-auto d-none d-lg-block">
      <svg
        className="bd-placeholder-img"
        width="200"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
    </div>
  );
};

export default Thumbnail;
