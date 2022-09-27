import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import { Form, FormGroup, Input, Label } from "reactstrap";
import tweetService from "../../tweetAppService/tweet.service";
import "./tweet.css";
const PostTweet = () => {
  const [userData, setUserData] = useState(null);
  const [tweet, setTweetMsg] = useState("");

  const [tweetTag, setTweetTag] = useState("");
  const [remaining, setRemaining] = useState(144);

  useEffect(() => {
    setRemaining(144 - tweet.length);
  }, [tweet]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  function handlePostTweet() {
    tweetService
      .postTweet(userData.user.username, tweet, tweetTag)
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: "30rem" }}>
        <div className="post-tweet">
          <Card.Body>
            <Form>
              <FormGroup>
                <Label for="exampleText">Post your tweet</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  maxLength={144}
                  value={tweet.tweet}
                  required
                  onChange={(e) => setTweetMsg(e.target.value)}
                  placeholder="Type what's on your mind"
                />
              </FormGroup>
              <span> {remaining} characters left</span>
              <FormGroup>
                <Input
                  id="TweetTag"
                  name="tag"
                  maxLength={50}
                  placeholder="#Tag"
                  onChange={(e) => setTweetTag(e.target.value)}
                  type="text"
                />
              </FormGroup>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handlePostTweet}
              >
                Post
              </button>
            </Form>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
export default PostTweet;
