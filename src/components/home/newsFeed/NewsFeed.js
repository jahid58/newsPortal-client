import React, { useEffect, useState } from "react";

import "./NewsFeed.css";
import News from "./News";

const NewsFeed = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("https://glacial-mesa-02011.herokuapp.com/getNews")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse();
        setNewses(newData);
      });
  }, []);

  return (
    <div>
      <div className="news__container text-center">
        <div className="row">
          {newses.length && newses.map((news) => <News news={news}></News>)}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
