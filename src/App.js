import "./App.css";
import Login from "./RootComponent/TweetAppComponents/page/Login";
import { Route, Routes } from "react-router-dom";
import TweetApp from "./RootComponent/TweetAppComponents/tweet/TweetApp";
import Footer from "./RootComponent/TweetAppComponents/page/Footer";
import ResetPassword from "./RootComponent/TweetAppComponents/page/ResetPassword";

import Register from "./RootComponent/TweetAppComponents/page/Register";
import Header from "./RootComponent/TweetAppComponents/page/Header";
import Home from "./RootComponent/TweetAppComponents/page/Home";
import PostTweet from "./RootComponent/TweetAppComponents/tweet/PostTweet";
import UpdateTweet from "./RootComponent/TweetAppComponents/tweet/UpdateTweet";
import DeleteTweet from "./RootComponent/TweetAppComponents/tweet/DeleteTweet";
import GetAllTweet from "./RootComponent/TweetAppComponents/tweet/GetAllTweet";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tweet" element={<TweetApp />} />
        <Route path="/getall" element={<GetAllTweet />} />
        <Route path="/post" element={<PostTweet />} />
        <Route path="/delete" element={<DeleteTweet />} />
        <Route path="/update" element={<UpdateTweet />} />
        <Route path="/forgot" element={<ResetPassword />} />
        {/* <Route>
          <Route path="/tweet" element={<TweetApp />} />
          <Route path="/post" element={<PostTweet />} />
          <Route path="/delete" element={<DeleteTweet />} />
          <Route path="/update" element={<UpdateTweet />} />
          <Route path="/forgot" element={<ResetPassword />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
