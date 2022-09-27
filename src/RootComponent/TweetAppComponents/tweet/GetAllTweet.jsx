import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import tweetService from "../../tweetAppService/tweet.service";
import TweetCard from "./TweetCard";
function GetAllTweet() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweetService.getAllTweets().then((res) => {
      console.log(localStorage.getItem("user"));
      console.log(res.data);
      setTweets(res.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: "25rem", padding: "5px" }}>
        <Card.Title color="blue">All Tweets of Users</Card.Title>
        <Card.Body>
          <div>
            {tweets.length > 0 &&
              tweets.map((tweet) => (
                <TweetCard
                  tweet={tweet}
                  key={tweet.tweetId}
                  userProfile={false}
                />
              ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default GetAllTweet;
