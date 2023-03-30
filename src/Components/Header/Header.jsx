import React from 'react'
import "./Header.css"
import IconAndSearch from './IconAndSearch'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <header className='top_header'>
        
        <nav className='header_content'>
        <IconAndSearch />
        <div className='header_left_options'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={PeopleIcon} title="My Network" />
            <HeaderOption Icon={WorkIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQHnp7fhICaZ9Q/profile-displayphoto-shrink_100_100/0/1674352141393?e=1685577600&v=beta&t=0WAaQ7sL3slXJqW8mCdezxuqTkVnynoA-8eDR_2e1QA" title="Me" />
        </div>
        </nav>

    </header>
  )
}

export default Header