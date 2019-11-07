import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
      </div>
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={tweet.retweets} />
        <LikeButton count={tweet.likes} />
        <MoreOptionsButton />
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  const { name, handler } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handler}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => (
  <i className="fa fa-retweet retweet-button" />
);

const LikeButton = ({ count }) => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: "Something about fish",
  gravatar: "xyz",
  author: {
    handler: "fishperson",
    name: "IAMA fish person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2019-07-30 21:24:30"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
