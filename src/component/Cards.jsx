import React from "react";
import { Star } from "@mui/icons-material";
import Explore from "./Explore";
import "../scss/cards.scss";

const usersData = [
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
  {
    name: "johndoe",
    stars: 2,
    followers: 200,
    tradeStyle: "Weekly",
    tradeType: "Spot",
    roi: "100.01%",
    pnl: "60,000 USD",
    aum: "60,000 USD",
    balance: "60,000 USD",
  },
];

const UserList = ({ open }) => {
  console.log(open);
  return (
    <div className={open === true ? "card" : "close"}>
     
      {usersData.map((user, index) => (
        <div key={index} className="cards">
          <div className="image-sec">
            <div className="img"></div>
            <div>
              <div className="name-johndoe">
                <h3>
                  {user.name}
                  <span>
                    <Star sx={{ height: "16px", color: "blue" }} />
                  </span>
                </h3>
              </div>
              <div className="name">
                <p className="user">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_100_139)">
                        <path
                          d="M5.4165 3.33329C5.4165 2.41246 4.67067 1.66663 3.74984 1.66663C2.829 1.66663 2.08317 2.41246 2.08317 3.33329C2.08317 4.25413 2.829 4.99996 3.74984 4.99996C4.67067 4.99996 5.4165 4.25413 5.4165 3.33329ZM6.24984 4.16663V4.99996H7.49984V6.24996H8.33317V4.99996H9.58317V4.16663H8.33317V2.91663H7.49984V4.16663H6.24984ZM0.416504 7.49996V8.33329H7.08317V7.49996C7.08317 6.39163 4.86234 5.83329 3.74984 5.83329C2.63734 5.83329 0.416504 6.39163 0.416504 7.49996Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_139">
                          <rect width="10" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  {user.followers}
                </p>
                <p className="user">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_100_139)">
                        <path
                          d="M5.4165 3.33329C5.4165 2.41246 4.67067 1.66663 3.74984 1.66663C2.829 1.66663 2.08317 2.41246 2.08317 3.33329C2.08317 4.25413 2.829 4.99996 3.74984 4.99996C4.67067 4.99996 5.4165 4.25413 5.4165 3.33329ZM6.24984 4.16663V4.99996H7.49984V6.24996H8.33317V4.99996H9.58317V4.16663H8.33317V2.91663H7.49984V4.16663H6.24984ZM0.416504 7.49996V8.33329H7.08317V7.49996C7.08317 6.39163 4.86234 5.83329 3.74984 5.83329C2.63734 5.83329 0.416504 6.39163 0.416504 7.49996Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_100_139">
                          <rect width="10" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  {user.followers}
                </p>
              </div>
              <div className="name">
                <p className="user-style">Trade Style </p>
                <p className="user-style">Type </p>
              </div>
              <div className="name">
                <h6 className="user-select">Weekly </h6>
                <h6 className="user-select">Spot </h6>
              </div>
            </div>
          </div>
          <div className="Roi-data">
            <div className="Roi">
              <p>30D ROI</p>
              <p className="p">{user.roi}</p>
            </div>
            <div className="Roi">
              <p>30D PNL</p>
              <p className="p">{user.pnl}</p>
            </div>
          </div>
          <div className="Roi-data">
            <div className="Roi">
              <p>AUM</p>
              <p className="p">{user.aum}</p>
            </div>
            <div className="Roi">
              <p>Balance</p>
              <p className="p">{user.balance}</p>
            </div>
          </div>
          <div className="btn-follow">
            <button>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
