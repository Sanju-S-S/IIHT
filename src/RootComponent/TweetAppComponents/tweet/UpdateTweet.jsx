import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { BiEdit } from "react-icons/bi";
import tweetService from "../../tweetAppService/tweet.service";

const UpdateTweet = ({ tweet }) => {
  const [modal, setModal] = useState(false);
  const [tweetMsg, setTweetMsg] = useState(tweet.tweet);
  const tweetMsgRef = useRef(null);
  const toggle = () => setModal(!modal);
  const [remaining, setRemaining] = useState(144);
  useEffect(() => {
    setRemaining(144 - tweetMsg.length);
  }, [tweetMsg]);

  const updateTweet = () => {
    tweetService
      .updateTweet(tweet.username, tweet.tweetId, tweetMsg)
      .then((res) => {
        console.log(res.data);
        window.location.reload(false);
      });
  };

  return (
    <>
      <BiEdit onClick={toggle} size={28} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit your tweet</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="tweet">Update your tweet</Label>
              <textarea
                id="tweet"
                name="text"
                ref={tweetMsgRef}
                value={tweetMsg}
                maxLength="144"
                required
                onChange={() => setTweetMsg(tweetMsgRef.current.value)}
              />
            </FormGroup>
            <span> {remaining} characters left</span>
            <FormGroup>
              <Label for="tag">TweetTag</Label>
              <Input
                id="tag"
                name="tweetTag"
                placeholder={tweet.tweetTag}
                type="text"
                disabled
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateTweet}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
  // return (
  //   <>
  //     <BiEdit onClick={updateTweet} />
  //     <h6>React Modal</h6>
  //     <Modal isOpen={modal} toggle={toggle}>
  //   <ModalHeader toggle={toggle}>Modal title</ModalHeader>
  //   <ModalBody>EXample testing Modal bootstarp</ModalBody>
  //   <ModalFooter>
  //     <Button color="primary" onClick={toggle}>
  //       Do Something
  //     </Button>
  //     <Button color="secondary" onClick={toggle}>
  //       Cancel
  //     </Button>
  //   </ModalFooter>
  // </Modal>
  //     {/* <h1>Update App</h1> */}
  //   </>
  // );
};
export default UpdateTweet;
