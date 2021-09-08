import React from "react";
import TopBar from "../Navbar/TopBar";
import MyCarousel from "./MyCarousel";
import NewsFeed from "./newsFeed/NewsFeed";
import Sidebar from "./sidebar/Sidebar";
function Home() {
  return (
    <div>
      <MyCarousel></MyCarousel>

      <div className="row mt-4 bg-danger">
        <div className="col-md-9">
          <NewsFeed></NewsFeed>
        </div>
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default Home;
