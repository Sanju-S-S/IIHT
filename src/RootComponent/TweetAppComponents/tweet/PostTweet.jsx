import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import tweetService from "../../tweetAppService/tweet.service";
import "./tweet.css";
const PostTweet = () => {
  const [userData, setUserData] = useState(null);
  const [tweet, setTweetMsg] = useState("");

  const [tweetTag, setTweetTag] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    console.log(userData);
  }, []);
  function handlePostTweet() {
    tweetService
      .postTweet(userData.username, tweet, tweetTag)
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: "19rem" }}>
        <div className="post-tweet">
          <Card.Subtitle>
            <div>Post a Tweet</div>
          </Card.Subtitle>
          <Card.Body>
            <div className="tweet">
              <span> Tweet</span>
              <textarea
                maxLength={144}
                required
                placeholder="Type what's on your mind"
                onChange={(e) => setTweetMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="tweetTag">
              <span>Tag</span>
              <input
                type="text"
                maxLength={50}
                placeholder="#Tag"
                onChange={(e) => setTweetTag(e.target.value)}
              />
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePostTweet}
            >
              <AiOutlineSend />
            </button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
export default PostTweet;
