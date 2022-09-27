import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tweetService from "../../tweetAppService/tweet.service";
import UserCard from "./UserCard";
function SearchUser() {
  const [searchUser, setSearchUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (searchUser !== "") {
      const searchUsers = () => {
        tweetService
          .getUserByUsername(searchUser)
          .then((res) => setUsers(res.data));
      };
      searchUsers();
    } else {
      setUsers([]);
    }
  }, [searchUser]);
  return (
    <div>
      <div>
        <span>Search Users </span>
        <Link to="/tweet">Home</Link>
      </div>
      <div className="input-group">
        <div className="form-outline">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
            value={searchUser}
          />
          <label className="form-label" htmlFor="search">
            Search
          </label>
        </div>
        {/* <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button> */}
      </div>

      <div className="pb-8">
        {users.length > 0 &&
          users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </div>
  );
}
export default SearchUser;
