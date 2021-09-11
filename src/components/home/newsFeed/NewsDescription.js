import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const NewsDescription = () => {
  const [description, setDescription] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://glacial-mesa-02011.herokuapp.com/description/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data);
      });
  }, [id]);
  return (
    <div className="m-5 ">
      {description && (
        <div>
          <img
            src={`data:image/png;base64,${description.image.img}`}
            style={{ height: "40vh", width: "100vw" }}
            alt="this is news banner"
          />

          <h1>{description.headline}</h1>

          <p>{description.description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsDescription;
