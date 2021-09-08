import React, { useEffect, useState } from "react";

function Sidebar() {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("https://glacial-mesa-02011.herokuapp.com/getNews")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 5);
        setNewses(newData);
        console.log(newses);
      });
  }, []);
  return (
    <div className="bg-primary " style={{ width: "max-content" }}>
      <h1 className="text-white p-2">Latest News</h1>
      <div className="row m-2 ">
        {newses.length &&
          newses.map((news) => (
            <div className="bg-light mt-5 p-2">
              <img
                src={`data:image/png;base64,${news.image.img}`}
                alt=""
                style={{ height: "100px", width: "fit-content" }}
              />
              <p>{news.headline}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
