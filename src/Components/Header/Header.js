import React from "react";
import user from "../nanbabu.jpeg";
import { data } from "./data";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="pro-header">
        <div className="pro-header__wrapper">
          {/*  Start Header Left  */}

          <div className="header-left">
            <a href="index.html">
              <img src={user} alt="" width="100%" height="100%" />
              {/* <img
                src="https://rainbowit.net/html/inbio/assets/images/logo/logo-dark.png"
                alt="logo"
              /> */}
            </a>
          </div>

          {/*  End Header Left  */}

          {/*  Start Header Center  */}

          <div className="header-center">
            <nav
              id="sideNav"
              className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
            >
              {/*  Start Mainmanu Nav  */}
              <ul className="pro-navList">
                {data.map((item) => {
                  return (
                    <li className="pro-navItem">
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  );
                })}
              </ul>
              {/*  End Mainmanu Nav  */}
            </nav>
          </div>

          {/*  End Header Center  */}
        </div>
      </header>
    </div>
  );
};

export default Header;
