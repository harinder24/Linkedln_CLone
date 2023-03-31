import React from 'react'
import "./LeftContainer.css"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export default function LeftContainer() {
  return (
    <div className='LeftContainer'>
    <div className='LeftContainer_imgAndAvatar'>
        <div className='LeftContainer_topBackground'>
          
        </div>
        <img className='LeftContainer_Avatar' src="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA" alt="" />
    </div>

    <div className='LeftContainer_Avatar_UserInfo'>
        <h5>Harinderpal Sran</h5>
        <h6>Student at Vancouver Community College (VCC)</h6>
    </div>
    <div className='LeftContainer_Connection'>
        <div>
        <h6 className='GrayColor'>Connections</h6>
        <h6>Grow your network</h6>
        </div>
        <GroupAddIcon className='LeftContainer_ui_icon'/>

    </div>
    </div>
  )
}
