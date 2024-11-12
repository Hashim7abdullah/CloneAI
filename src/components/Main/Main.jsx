import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>CloneAI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello , I'm CloneAI</span>
          </p>
          <p>How can i assist you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Is useEffect dependency array specified accurately to avoid
              unnecessary re-renders?
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Are useState and useEffect used optimally to manage state and side
              effects
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Is useCallback used to memoize functions that are passed as props?
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Is useReducer used in place of useState for complex state logic or
              when multiple state variables are interdependent?
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              name=""
              id=""
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            CloneAI may show inaccurate info , including about people , so
            double-check its privacy and policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
