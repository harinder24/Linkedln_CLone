import React from 'react'
import "./MiddleContainerStartAPost.css"
export default function MiddleContainerStartAPost({Icon, title , colorIcon}) {
  return (
    <div className='MiddleContainerStartAPost'>
        <div>
        {Icon && <Icon className={colorIcon} />}
        </div>
        <div>
            {title}
        </div>
    </div>
  )
}
