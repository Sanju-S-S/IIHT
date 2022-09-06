import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import tweetService from "../../tweetAppService/tweet.service";
const DeleteTweet = ({ tweet }) => {
  function handleDeleteTweet(e) {
    console.log(e);
    tweetService.deleteTweet(tweet.username, tweet.tweetId).then((res) => {
      console.log(res.data);
      console.log(e.target.data);
    });
  }
  return (
    <div>
      Delete Tweet
      <a
        onClick={(e) => {
          handleDeleteTweet();
        }}
      >
        <FaTrashAlt />
      </a>
    </div>
  );
};
export default DeleteTweet;
