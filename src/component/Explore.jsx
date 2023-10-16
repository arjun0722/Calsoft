import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../scss/explore.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Explore = () => {
  return (
    <div className="main">
      <div className="explore">
        <h1 style={{ fontWeight: "bolder" }}>Spotlight</h1>
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              placeholder="Search by portfolio name"
              style={{ width: "100%" }}
            />
            <SearchIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "8px",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#2e7df6",
              }}
            />
          </div>
        </div>
      </div>
      <div className="Explore More">
        <h4>Top Portfolios by 30 Day PNL</h4>
        <a>
          Explore More
          <span>
            <ArrowForwardIosIcon sx={{ height: "10px" }} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Explore;
