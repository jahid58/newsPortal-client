import React from "react";
import AddNews from "./addNews/AddNews";
import AddAdmin from "./addAdmin/AddAdmin";

const Admin = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        {" "}
        <AddNews></AddNews>
      </div>
      <div className="col-md-6">
        {" "}
        <AddAdmin></AddAdmin>
      </div>
    </div>
  );
};

export default Admin;
