import React, { useEffect, useRef, useState } from "react";
import tweetService from "../../tweetAppService/tweet.service";
import { toast } from "react-toastify";
import avatar from "../../../avatar.png";
import authService from "../../tweetAppService/authService";
const TweetReply = ({ tweet }) => {
  const tweetMessageRef = useRef(null);
  const [tweetReply, setTweetReply] = useState("");
  const [remaining, setRemaining] = useState(144);

  useEffect(() => {
    setRemaining(144 - tweetReply.length);
  }, [tweetReply]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tweetReply.length === 0) {
      toast("Reply cannot be empty!", {
        icon: "⚠️",
      });
      return;
    }

    tweetService
      .replyTweet(tweet.username, tweet.tweetId, tweetReply)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
        if (response.data) {
          toast.success("Tweet Replyed successfully");
        } else {
          toast.error("Tweet failed to reply!");
        }
      });
  };

  const handleTweetMessageChange = () => {
    setTweetReply(tweetMessageRef.current.value);
  };

  return (
    <div>
      <div>
        <div>
          <img src={avatar} width="35" height="35" alt="Profile avatar" />
          <span> {authService.currentUser()} </span>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="2"
          name="tweetMessage"
          ref={tweetMessageRef}
          value={tweetReply}
          placeholder="Tweet your reply"
          onChange={handleTweetMessageChange}
          maxLength="144"
        />
        <div>
          <span>{remaining} characters left&nbsp;&nbsp;</span>
          <button className="btn btn-primary btn-sm" type="submit">
            Reply
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetReply;
