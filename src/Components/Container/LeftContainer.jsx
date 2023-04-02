import React from "react";
import "./LeftContainer.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Avatar } from "@material-ui/core";
export default function LeftContainer() {
  return (
    <div className="LeftContainerWrap">
    <div className="LeftContainer">
      <div className="LeftContainer_imgAndAvatar">
        <img
          className="LeftContainer_topBackground"
          src="https://th.bing.com/th?id=OIF.twNr%2fiM0yYwIAFXFLE8XRg&w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
        <Avatar
          className="LeftContainer_Avatar"
          src="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA"
          alt=""
        />
      </div>

      <div className="LeftContainer_Avatar_UserInfo">
        <h5>Harinderpal Sran</h5>
        <h6>Student at Vancouver Community College (VCC)</h6>
      </div>
      <div className="LeftContainer_Connection">
        <div>
          <h6 className="GrayColor">Connections</h6>
          <h6>Grow your network</h6>
        </div>
        <GroupAddIcon className="LeftContainer_ui_icon" />
      </div>
    </div>
    <div className="LeftConatiner_bottom">
      <h4>Recent</h4>
      <div>
      <RecentSearch title="ReactJs" />
      <RecentSearch title="AngularJs" />
      <RecentSearch title="NodeJs" />
      <RecentSearch title="VanillaJs" />
      <RecentSearch title="VueJs" />
      </div>
    </div>
    </div>
  );
}

function RecentSearch({title}){
  return(
    <div className="RecentSearch"># {title}</div>
  )
}