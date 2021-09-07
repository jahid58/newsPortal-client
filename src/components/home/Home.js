import React from "react";
import TopBar from "../Navbar/TopBar";
import MyCarousel from "./MyCarousel";
import NewsFeed from "./newsFeed/NewsFeed";
import Sidebar from "./sidebar/Sidebar";
function Home() {
  return (
    <div>
      <TopBar />
      <MyCarousel></MyCarousel>

      <div className="col-md-9">
        <NewsFeed></NewsFeed>
      </div>
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Home;
