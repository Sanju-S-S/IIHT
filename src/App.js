import "./App.css";
import { Route, Routes } from "react-router-dom";
import TweetApp from "./RootComponent/TweetAppComponents/tweet/TweetApp";
import ResetPassword from "./RootComponent/TweetAppComponents/page/ResetPassword";

import Home from "./RootComponent/TweetAppComponents/page/Home";
import GetAllUsers from "./RootComponent/TweetAppComponents/User/GetAllUsers";
import SearchUser from "./RootComponent/TweetAppComponents/User/SearchUser";
import { useEffect, useState } from "react";
import GetUsersTweet from "./RootComponent/TweetAppComponents/User/GetUsersTweet";
import Login from "./RootComponent/TweetAppComponents/page/Login";
import Register from "./RootComponent/TweetAppComponents/page/Register";
function App() {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setIsLoggedInUser(true);
    } else {
      setIsLoggedInUser(false);
    }
  });
  return (
    <div className="App">
      <Routes>
        {isLoggedInUser}? (<Route path="/tweet" element={<TweetApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<GetAllUsers />} />
        <Route path="/profile" element={<GetUsersTweet />} />
        <Route path="/search/users" element={<SearchUser />} />
        <Route path="/forgot" element={<ResetPassword />} />
        ):
        <Route path="/" exact element={<Home />} />
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
