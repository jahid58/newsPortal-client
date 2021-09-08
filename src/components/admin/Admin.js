import React, { useEffect, useState, useContext } from "react";
import AddNews from "./addNews/AddNews";
import AddAdmin from "./addAdmin/AddAdmin";
import { UserContext } from "./../../App";

const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://glacial-mesa-02011.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser]);
  return (
    <div>
      {isAdmin && (
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
      )}{" "}
    </div>
  );
};

export default Admin;
