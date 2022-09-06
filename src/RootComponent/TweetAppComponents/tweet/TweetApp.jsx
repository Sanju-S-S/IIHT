import React from "react";
import NavBar from "../page/NavBar";
import GetAllTweet from "./GetAllTweet";
import PostTweet from "./PostTweet";
function TweetApp() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div>Welcome to Tweet</div>
        <PostTweet />
      </div>
      <br />
      <div>
        <GetAllTweet />
      </div>
    </div>
  );
}
export default TweetApp;
