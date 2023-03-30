import React from 'react'
import "./HeaderOptions.css"
export default function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className="HeaderOption_Icon" />}
        {avatar && (<img className="HeaderOption_Avatar" src={avatar} />)}
        <h3>{title}</h3>
    </div>
  )
}
