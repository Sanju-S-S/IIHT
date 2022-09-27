import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import tweetService from "../../tweetAppService/tweet.service";
import TweetCard from "../tweet/TweetCard";
import "../common.css";
function GetUsersTweet() {
  const [tweets, setTweets] = useState([]);
  const [users, setUser] = useState([]);
  let username = JSON.parse(localStorage.getItem("user")).user.username;
  // const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   setUserData(JSON.parse(localStorage.getItem("user")));
  //   console.log(userData);
  // }, []);
  useEffect(() => {
    tweetService.getUserByUserName(username).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
    tweetService.getAllTweetOfUsername(username).then((res) => {
      console.log(res.data);
      setTweets(res.data);
    });
  }, []);

  return (
    <>
      <div className="user-detail">
        {/* <div>
          <Label htmlFor="FirstName">FirstName</Label>
          <Input
            id="FirstName"
            title="FirstName"
            required={false}
            name="name"
            value={users.firstName}
            disabled
          />
        </div> */}
        <div>
          Username
          <Input
            title="Username"
            required={false}
            name="username"
            value={users.username}
            disabled
          />
        </div>
        <div className="">
          EmailId
          <Input
            title="EmailId"
            required={false}
            name="email"
            value={users.emailId}
            disabled
          />
        </div>
        <div>
          PhoneNumber
          <Input
            title="Phone"
            required={false}
            name="phone"
            value={users.contactNumber}
            disabled
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: "20rem", padding: "5px" }}>
          <Card.Title color="blue">
            All Tweets of{" "}
            {JSON.parse(localStorage.getItem("user")).user.username}
          </Card.Title>
          <Card.Body>
            <div>
              {tweets.length > 0 &&
                tweets.map((tweet) => (
                  <TweetCard
                    tweet={tweet}
                    key={tweet.tweetId}
                    userProfile={true}
                  />
                ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default GetUsersTweet;
