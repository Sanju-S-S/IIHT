import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TweetsContext } from "../../context/TweetsContext";
import { postNewReply } from "../../services/TweetService/TweetService";

const TweetReply = ({ id }) => {
  const tweetMessageRef = useRef(null);
  //   const tagsRef = useRef(null);
  const [tweetMessage, setTweetMessage] = useState("");
  const [remaining, setRemaining] = useState(144);

  const { updateTweet } = useContext(TweetsContext);

  useEffect(() => {
    setRemaining(144 - tweetMessage.length);
  }, [tweetMessage]);

  const resetFields = () => {
    setTweetMessage("");
  };

  const postReply = async (tweetRequest) => {
    let response = await postNewReply(tweetRequest, id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    if (response.status === "SUCCESS") {
      updateTweet(response.data);
      toast.success("Reply posted!");
      resetFields();
    } else if (response.status === "FAILURE") {
      toast.error(response.message);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tweetMessage.length === 0) {
      toast("Reply cannot be empty!", {
        icon: "⚠️",
      });
      return;
    }

    let newTweet = {
      tweetMessage,
      tags: [],
    };
    postReply(newTweet);
  };

  const handleTweetMessageChange = () => {
    setTweetMessage(tweetMessageRef.current.value);
  };

  return (
    <div
      className="relative flex w-full font-poppins gap-4 mb-4 bg-gray-100 rounded-lg  p-4 border border-gray-400"
      data-testid="newReply"
    >
      <div className="flex justify-center items-start">
        <div className="bg-secondary-1 shadow-md text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="w-full px-2 m-2">
        <textarea
          className="w-full text-primary-1 resize-none bg-gray-200 rounded-lg font-bold focus:outline-none p-4 placeholder:font-light"
          rows="2"
          name="tweetMessage"
          ref={tweetMessageRef}
          value={tweetMessage}
          placeholder="Tweet your reply"
          onChange={handleTweetMessageChange}
          maxLength="144"
        />
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
          <span
            className={`text-sm bg-white p-2 rounded-md ${
              remaining > 50
                ? "text-primary-2"
                : remaining < 50 && remaining > 0
                ? "text-yellow-500"
                : "text-red-700"
            }`}
          >
            {remaining} characters left
          </span>
          <button
            type="submit"
            className="py-1 px-2  bg-primary-1 text-white rounded-xl float-right shadow-lg active:scale-95"
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReply;
