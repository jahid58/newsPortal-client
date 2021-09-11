import React from "react";
import TopBar from "../Navbar/TopBar";
import Footer from "./footer/Footer";
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
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
