import React, { useState } from "react";
import { Card } from "react-bootstrap";
import avatar from "../../../avatar.png";
import { FcLike, FcComments } from "react-icons/fc";
import DeleteTweet from "./DeleteTweet";
import UpdateTweet from "./UpdateTweet";
import tweetService from "../../tweetAppService/tweet.service";
import { useEffect } from "react";
const TweetCard = ({ tweet, userProfile }) => {
  const replyComments = (username, tweetId) => {};
  const handleLikeTweet = (event) => {
    event.preventDefault();
    tweetService.likeTweet(tweet.username, tweet.tweetId).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };
  return (
    <div>
      <Card style={{ padding: "20px", marginTop: "10px" }}>
        <div key={tweet.tweetId}>
          <div>
            <img src={avatar} width="50" height="50" alt="Profile avatar" />
            <span> {tweet.username} </span>
            <span>{userProfile && <UpdateTweet tweet={tweet} />}</span>
          </div>
          <div>
            <span>{tweet.tweet}</span>
          </div>
          <div>
            <span>{tweet.tweetTag}</span>
          </div>
          <div>
            <a
              href="#"
              onClick={() => replyComments(tweet.username, tweet.tweetId)}
            >
              <span>
                <FcComments size={28} />
              </span>
            </a>
            <span>{tweet.reply}</span>

            <a
              type="submit"
              href="#"
              onClick={(event) => {
                handleLikeTweet(event);
              }}
            >
              <FcLike size={28} />
            </a>
            {tweet.like}

            {userProfile && <DeleteTweet tweet={tweet} />}
          </div>
        </div>
        <div style={{ float: "left" }}></div>
      </Card>
    </div>
  );
};
export default TweetCard;
