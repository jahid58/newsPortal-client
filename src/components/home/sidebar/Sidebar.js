import React, { useEffect, useState } from "react";

function Sidebar() {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/getNews")
      .then((res) => res.json())
      .then((data) => {
        setNewses(data);
        console.log(newses);
      });
  }, []);
  return (
    <div className="bg-danger">
      <div className="row m-2 ">
        {newses.length &&
          newses.map((news) => (
            <div className="bg-light mt-5">
              <img
                src={`data:image/png;base64,${news.image.img}`}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <p>{news.headline}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
