import React from "react";
import NavBar from "../page/NavBar";
import GetAllTweet from "./GetAllTweet";
import PostTweet from "./PostTweet";
const TabBar = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>Welcome to Tweet</div>
      <div>
        <PostTweet />
      </div>
      <br />
      <div>
        <GetAllTweet />
      </div>
    </div>
  );
};
export default TabBar;
