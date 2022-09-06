import React, { useState } from "react";
import { Card } from "react-bootstrap";
import avatar from "../../../avatar.png";
import { FcLike, FcComments } from "react-icons/fc";
import DeleteTweet from "./DeleteTweet";
import tweetService from "../../tweetAppService/tweet.service";
const TweetCard = ({ tweets }) => {
  function replyComments() {
    tweetService.replyTweet(tweets.username, tweets.tweetId).then((res) => {
      console.log(res.data);
    });
  }
  function handleLikeTweet(event, username, like) {
    tweetService.likeTweet(username, like).then((res) => {
      console.log(res.data);
      console.log(event.target.data);
    });
  }
  return (
    <div>
      {tweets.length > 0 && (
        <ul>
          {tweets.map((tweet) => (
            <Card>
              <div key={tweet.tweetId}>
                <div>
                  <img
                    src={avatar}
                    width="50"
                    height="50"
                    alt="Profile avatar"
                  />
                  <span>{tweet.username}</span>
                </div>
                <div>
                  <span>{tweet.tweet}</span>
                </div>
                <div>
                  <span>
                    <FcComments />
                  </span>
                  <a href="#" onClick={replyComments}>
                    Comments
                  </a>
                  <span>{tweet.reply}</span>

                  <a
                    type="submit"
                    href="#"
                    onClick={(event) =>
                      handleLikeTweet(event, tweet.username, tweet.tweetId)
                    }
                  >
                    <FcLike />
                  </a>
                  {tweet.like}
                </div>
              </div>
              <div style={{ float: "left" }}>
                <DeleteTweet tweet={tweet} />
              </div>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TweetCard;
