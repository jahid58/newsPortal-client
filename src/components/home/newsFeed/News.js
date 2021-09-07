import React from "react";
import { Link } from "react-router-dom";

const News = (props) => {
  const { _id, headline, image } = props.news;
  return (
    <div className="col-md-3">
      <div className="news shadow rounded">
        <img
          src={`data:image/png;base64,${image.img}`}
          alt=" this is image"
          className="img"
        />
        <div className="news__info">
          <h6 className="m-2 " style={{ overflow: "hidden" }}>
            {headline}
          </h6>
          <Link to={`/description/${_id}`}> Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default News;
