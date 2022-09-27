import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Form, FormGroup, input, label, Row } from "reactstrap";
import tweetService from "../../tweetAppService/tweet.service";
import TweetCard from "../tweet/TweetCard";
import NavBar from "../page/NavBar";
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
      <div>
        <NavBar />
      </div>
      <div style={{ justifyContent: "center" }}>
        <div className="profile">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            className="input"
            id="username"
            title="Username"
            name="username"
            defaultValue={users.username}
            disabled
          />
        </div>
        <div className="profile">
          <label htmlFor="email" className="label">
            EmailID
          </label>
          <input
            className="input"
            id="email"
            title="EmailId"
            name="email"
            defaultValue={users.emailId}
            disabled
          />
        </div>
        <div className="profile">
          <label htmlFor="phone" className="label">
            PhoneNumber
          </label>
          <input
            className="input"
            id="PhoneNumber"
            title="Phone"
            name="phone"
            defaultValue={users.contactNumber}
            disabled
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: "500px", padding: "20px" }}>
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
