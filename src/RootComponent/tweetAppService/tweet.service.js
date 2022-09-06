import axios from "axios";

const TWEET_REST_API_URL = "http://localhost:8087/api/v1.0/tweets/";
class tweetService {
  getAllTweets() {
    return axios.get(TWEET_REST_API_URL + "all");
  }
  getAllUsers() {
    return axios.get(TWEET_REST_API_URL + "users/all");
  }
  getUserByUsername(username) {
    return axios.get(TWEET_REST_API_URL + "user/search/" + username);
  }
  getTweetByTweetId(tweetId) {
    return axios.get(TWEET_REST_API_URL + "tweet/" + tweetId);
  }

  getAllTweetOfUsername(username) {
    return axios.get(TWEET_REST_API_URL + username);
  }

  postTweet(username, tweet, tweetTag) {
    return axios.post(TWEET_REST_API_URL + username + "/add", {
      username,
      tweet,
      tweetTag,
    });
  }

  updateTweet = (userId, tweetId, postdata) => {
    return axios.put(
      TWEET_REST_API_URL + userId + "/update/" + tweetId,
      postdata
      // {
      //   headers: { "Content-Type": "application/json" },
      // }
    );
  };

  likeTweet(username, tweetId) {
    return axios.put(TWEET_REST_API_URL + username + "/like/" + tweetId, {
      username,
      tweetId,
    });
  }

  replyTweet(username, tweetId, postdata) {
    return axios.post(
      TWEET_REST_API_URL + username + "/reply/" + tweetId,
      postdata
      // {
      //   headers: { "Content-Type": "application/json" },
      // }
    );
  }

  deleteTweet(username, tweetId) {
    return axios.delete(TWEET_REST_API_URL + username + "/delete/" + tweetId, {
      username,
      tweetId,
    });
  }
}
export default new tweetService();
