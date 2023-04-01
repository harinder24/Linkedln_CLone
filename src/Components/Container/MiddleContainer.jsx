import React from "react";
import "./MiddleContainer.css";
import MiddleContainerStartAPost from "./MiddleContainerStartAPost";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import { Avatar } from "@material-ui/core";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export default function MiddleContainer() {
  return (
    <div>
      <div className="MiddleContainer">
        <div>
          <Avatar
            src="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA"
            alt=""
          />
          {/* <input type="text" placeholder="Start a post" /> */}
          <button>Start a post</button>
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
      <UserFeed name="Harinderpal Sran" description="Description" message="Wow this works"/>
    </div>
  );
}

function UserFeed({name,description,message}){
  return(
      <div className="UserFeed">
        <div>
            <Avatar />
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
  )
}