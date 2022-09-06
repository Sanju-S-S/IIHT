import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import tweetService from "../../tweetAppService/tweet.service";
import TweetCard from "./TweetCard";
function GetAllTweet() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweetService.getAllTweets().then((res) => {
      console.log(res.data);
      setTweets(res.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: "19rem" }}>
        <Card.Subtitle color="blue">All Tweets of Users</Card.Subtitle>
        <Card.Body>
          <TweetCard tweets={tweets} />
        </Card.Body>
      </Card>
    </div>
  );
}
export default GetAllTweet;
