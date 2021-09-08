import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`https://glacial-mesa-02011.herokuapp.com/category/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [id]);
  return (
    <div className="row m-2 ">
      {news.length &&
        news.map((news) => (
          <div className="bg-light mt-5 p-2 text-center">
            <img
              src={`data:image/png;base64,${news.image.img}`}
              alt=""
              style={{
                height: "300px",
                width: "fit-content",
              }}
            />
            <h4 className="text-primary">{news.headline}</h4>
            <p className="mt-5 ">{news.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Category;
