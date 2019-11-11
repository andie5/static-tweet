import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

// add the { tweet } prop destructured
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

function Count({ count }) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
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
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    <span className="like-count">{count ? count : null}</span>
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="likes">{likes > 0 ? likes : "No"} likes</div>
    </div>
  );
}

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

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number
};

LikeButton.propTypes = {
  count: PropTypes.number
};

RetweetButton.propTypes = {
  count: PropTypes.number
};

Message.propTypes = {
  text: PropTypes.string
};

Time.propTypes = {
  time: PropTypes.string
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handler: PropTypes.string.isRequired
  }).isRequired
};

Avatar.propTypes = {
  hash: PropTypes.string
};

Tweet.propTypes = {
  tweet: PropTypes.object
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
{
  /* <Comment author={"somebody"} message="a likeable person" likes={1} />
<Comment author="mr popular" message="unlikeable person" />
<Comment author="mr popular" message="another message" likes={0} /> 
<Comment author="error missing message"  />
<Comment message="missing author"  />  */
}
