import React from "react";
import avatar from "../../../avatar.png";
//import { FcLike, FcComments } from "react-icons/fc";
import { Card } from "react-bootstrap";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ padding: "20px", marginTop: "10px" }}>
        <div key={user.username}>
          <div className="row">
            <img
              className="col-3"
              src={avatar}
              width="40"
              height="40"
              alt="Profile avatar"
            />
            <span className="col-7">{user.username}</span>
          </div>
          <div>
            <span>{user.emailId}</span>
          </div>
          <div>
            <span>{user.contactNumber}</span>
          </div>
        </div>
        <br />
      </Card>
    </div>
  );
};
export default UserCard;
