import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="col-9 col-lg-11 d-none d-md-flex mb-5" id="mainLinks">
      <Link to="/trending" className="nav-link">
        TRENDING
      </Link>
      <Link to="/podcast" className="nav-link">
        PODCAST
      </Link>
      <Link to="/moods-and-genres" className="nav-link">
        MOODS AND GENRES
      </Link>
      <Link to="/new-releases" className="nav-link">
        NEW RELEASES
      </Link>
      <Link to="/discover" className="nav-link">
        DISCOVER
      </Link>
    </div>
  );
};

export default Topbar;
