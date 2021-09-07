import React, { useEffect, useState } from "react";

import "./NewsFeed.css";
import News from "./News";

const NewsFeed = () => {
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
