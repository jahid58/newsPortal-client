import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol";

const Footer = () => {
  const newsCategories = [
    { name: "National ", link: "/national" },
    { name: "Sports", link: "/sports" },
    { name: "International", link: "/international" },
    { name: "Entertainment", link: "/entertainment" },
  ];
  const address = [
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
  ];

  return (
    <footer className=" clear-both " style={{ backgroundColor: "darkmagenta" }}>
      <div className="container pt-5">
        <div className="row py-5 text-center">
          <FooterCol
            key={1}
            menuTitle={"News  Categories"}
            menuItems={newsCategories}
          />

          <FooterCol
            key={4}
            menuTitle="Branches"
            menuItems={address}
          ></FooterCol>
          <div className=" col-md-4">
            <h3 className="p-3  text-primary">Stay connected with us</h3>

            <ul className=" list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
