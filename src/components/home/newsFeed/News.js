import React from "react";
import { Link } from "react-router-dom";

const News = (props) => {
  const { _id, headline, image } = props.news;
  return (
    <div className="col-md-4 p-2 news__box ">
      <div className="news shadow rounded  bg-light">
        <img
          src={`data:image/png;base64,${image.img}`}
          alt=" this is image"
          className="img"
        />
        <div className="news__info pb-2">
          <h6 className="m-2 ">{headline}</h6>
          <Link to={`/description/${_id}`}> Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default News;
