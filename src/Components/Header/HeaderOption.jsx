import React from 'react'
import "./HeaderOptions.css"
import Avatar from '@material-ui/core/Avatar';
export default function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className="HeaderOption_Icon" />}
        {avatar && (<Avatar className="HeaderOption_Avatar" src={avatar} />)}
        <h3>{title}</h3>
    </div>
  )
}
