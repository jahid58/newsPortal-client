import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("https://glacial-mesa-02011.herokuapp.com/getNews")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 5);
        setNewses(newData);
      });
  }, []);
  return (
    <div className="bg-primary  p-2 ">
      <h1 className="text-white">Latest News</h1>
      <div className=" ">
        {newses.length &&
          newses.map((news) => (
            <div className="bg-light mt-5 d-flex ">
              <div className="mx-1">
                <img
                  src={`data:image/png;base64,${news.image.img}`}
                  alt=""
                  style={{ height: "150px", width: "120px" }}
                />{" "}
                <Link to={`/description/${news._id}`}> Read more</Link>
              </div>

              <p className="m-2">{news.headline}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
