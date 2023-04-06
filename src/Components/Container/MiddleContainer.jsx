import React, { useState } from "react";
import "./MiddleContainer.css";
import MiddleContainerStartAPost from "./MiddleContainerStartAPost";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import { Avatar } from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { db } from "../../firebaseLoader";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
export default function MiddleContainer() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPosts = () => {
    db.collection("posts").add({
      name: "Harinderpal Sran",
      description: "this is a test",
      message: input,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("")
    document.getElementById("FeedModalID").classList.remove("ShowDisplayFlex");
    document.querySelector("html").classList.remove("htmlOverflow");
  };

  function showCreateAPost() {
    document.getElementById("FeedModalID").classList.toggle("ShowDisplayFlex");
    document.querySelector("html").classList.toggle("htmlOverflow");
  }
  function closeCreateAPost() {
    document.getElementById("FeedModalID").classList.remove("ShowDisplayFlex");
    document.querySelector("html").classList.remove("htmlOverflow");
  }
  return (
    <div className="MainMiddleContainer">
      <div className="MiddleContainer">
        <div>
          <Avatar
            className="MiddleContainer_Aatar"
            src="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA"
            alt=""
          />

          <button onClick={showCreateAPost} id="postBtn">
            Start a post
          </button>
        </div>
        <div className="MiddleContainerIcon">
          <MiddleContainerStartAPost
            Icon={InsertPhotoIcon}
            colorIcon="skyBlueColor"
            title="Photo"
          />
          <MiddleContainerStartAPost
            Icon={VideoLibraryIcon}
            colorIcon="forestgrenColor"
            title="Video"
          />
          <MiddleContainerStartAPost
            Icon={CalendarMonthIcon}
            colorIcon="brownColor"
            title="Event"
          />
          <MiddleContainerStartAPost
            Icon={ArticleIcon}
            colorIcon="redColor"
            title="Write Article"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoURL } }) => {
        return (
          <UserFeed
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        );
      })}

      <UserFeed
        name="Harinderpal Sran"
        description="Description"
        message="Wow this works"
        photoURL={""}
      />
      <div id="FeedModalID" className="FeedModal">
        <div className="AddFeed">
          <div className="AddFeed_header">
            <h4>Create a post</h4>
            <div onClick={closeCreateAPost}>
              <CloseIcon />
            </div>
          </div>
          <div className="AddFeed_user">
            <Avatar
              className="MiddleContainer_Aatar"
              src="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA"
              alt=""
            />

            <div>Harinderpal Sran</div>
          </div>

          <div className="AddFeed_input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name=""
              id=""
              placeholder="What do you want to talk about?"
              autoFocus
            ></textarea>
          </div>
          <div className="AddFeed_btn">
            <button onClick={sendPosts}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserFeed({ name, description, message, photoURL }) {
  return (
    <div className="UserFeed">
      <div>
        <Avatar src={photoURL} />
        <div>
          <h5>{name}</h5>
          <h6>{description}</h6>
        </div>
      </div>
      <div>
        <p>{message}</p>
      </div>
      <div>
        <MiddleContainerStartAPost
          Icon={ThumbUpOffAltIcon}
          colorIcon="grayColor"
          title="Like"
        />
        <MiddleContainerStartAPost
          Icon={ChatOutlinedIcon}
          colorIcon="grayColor"
          title="Comment"
        />
        <MiddleContainerStartAPost
          Icon={ShareOutlinedIcon}
          colorIcon="grayColor"
          title="Share"
        />
        <MiddleContainerStartAPost
          Icon={SendOutlinedIcon}
          colorIcon="grayColor"
          title="Send"
        />
      </div>
    </div>
  );
}
