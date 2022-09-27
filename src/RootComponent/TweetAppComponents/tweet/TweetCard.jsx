import React, { useState } from "react";
import { Card } from "react-bootstrap";
import avatar from "../../../avatar.png";
import { FcLike, FcComments, FcLikePlaceholder } from "react-icons/fc";
import DeleteTweet from "./DeleteTweet";
import UpdateTweet from "./UpdateTweet";
import TweetReply from "./TweetReply";
import ReplyCard from "./ReplyCard";
import CalculateSince from "../CalculateSince";
import tweetService from "../../tweetAppService/tweet.service";
import { useEffect } from "react";
const TweetCard = ({ tweet, userProfile }) => {
  const [replies, setReplies] = useState(false);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
    like ? handleUnLikeTweet() : handleLikeTweet();
  };
  const showReplies = () => {
    setReplies((prevState) => !prevState);
  };
  const handleLikeTweet = () => {
    tweetService.likeTweet(tweet.username, tweet.tweetId).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };
  const handleUnLikeTweet = () => {
    tweetService.unlikeTweet(tweet.username, tweet.tweetId).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };

  let time = CalculateSince(tweet.createdTime);
  return (
    <div>
      <Card style={{ padding: "20px", marginTop: "10px" }}>
        <div key={tweet.tweetId}>
          <div className="row">
            <img className="col-2" src={avatar} alt="Profile avatar" />
            <span className="col-4"> {tweet.username} </span>
            <span className="col-6"> {time}</span>
          </div>
          <br />
          <div>
            <span>{tweet.tweet}</span>
          </div>
          <div>
            <span>{tweet.tweetTag}</span>
          </div>
          <br />
          <div>
            <a href="#" onClick={showReplies}>
              <span>
                <FcComments size={28} />
              </span>
            </a>
            {tweet.tweetReply.length}
            {/* <span>{tweet.reply}</span> */}
            <a
              onClick={(event) => {
                toggleLike();
              }}
            >
              {like ? <FcLikePlaceholder size={28} /> : <FcLike size={28} />}
            </a>
            {tweet.like}
            {userProfile && <DeleteTweet tweet={tweet} />}&nbsp;
            {userProfile && <UpdateTweet tweet={tweet} />}
          </div>
        </div>
        <div style={{ float: "left" }}></div>
      </Card>
      {replies && (
        <>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Card style={{ padding: "20px", marginTop: "1px", width: "300px" }}>
              <TweetReply tweet={tweet} />

              {tweet.tweetReply.length > 0 &&
                tweet.tweetReply.map((reply) => (
                  <ReplyCard
                    reply={reply.tweetReply}
                    username={reply.username}
                    key={tweet.tweetId}
                  />
                ))}
            </Card>
          </div>
        </>
      )}
    </div>
  );
};
export default TweetCard;
