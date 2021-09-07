import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const NewsDescription = () => {
  const [description, setDescription] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/description/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data);
      });
  }, [id]);
  return (
    <div>
      {description && (
        <div>
          {" "}
          <img
            src={`data:image/png;base64,${description.image.img}`}
            style={{ height: "40vh", width: "100vw", margin: "30px" }}
            alt="this is news banner"
          />
          <p>{description.description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsDescription;
