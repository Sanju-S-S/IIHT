import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tweetService from "../../tweetAppService/tweet.service";
import UserCard from "./UserCard";
import NavBar from "../page/NavBar";
import { Input } from "reactstrap";
function GetAllUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    tweetService.getAllUsers().then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  function handleClick() {
    navigate("/tweet");
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>Users</div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: "30rem" }}>
          <Card.Subtitle color="blue">All Users</Card.Subtitle>
          <Card.Body>
            <div>
              {users.length > 0 &&
                users.map((user) => (
                  <UserCard user={user} key={user.username} />
                ))}
            </div>
          </Card.Body>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleClick}
          >
            Back to tweet Page
          </button>
        </Card>
      </div>
    </div>
  );
}
export default GetAllUsers;
