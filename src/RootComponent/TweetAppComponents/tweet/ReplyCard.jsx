import React from "react";
import avatar from "../../../avatar.png";
import { Card } from "react-bootstrap";
const ReplyCard = ({ reply, username }) => {
  return (
    <div>
      <Card style={{ padding: "10px", marginRight: "10px" }}>
        <div>
          <div>
            <img src={avatar} width="20" height="20" alt="Profile avatar" />
            <span>{username}</span>
          </div>
          <div>
            <span>{reply}</span>
          </div>
          {/* <div>
            <span>{user.contactNumber}</span>
          </div> */}
        </div>
        <br />
      </Card>
    </div>
  );
};
export default ReplyCard;
