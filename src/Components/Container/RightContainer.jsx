import React from 'react'
import "./RightContainer.css"
export default function RightContainer() {
  return (
    <div className='RightContainer'>
        <div>
            <div>
                Linkedln News
            </div>
            <img src="https://clipground.com/images/information-symbol-clip-art-14.png" alt="" />
        </div>
        <RightContainerContent title="Feds announce $2.5B grocery rebate" time="8h ago" readers="123 readers"/>
        <RightContainerContent title="Feds announce $2.5B grocery rebate" time="8h ago" readers="123 readers"/>
        <RightContainerContent title="Feds announce $2.5B grocery rebate" time="8h ago" readers="123 readers"/>
        <RightContainerContent title="Feds announce $2.5B grocery rebate" time="8h ago" readers="123 readers"/>
        <RightContainerContent title="Feds announce $2.5B grocery rebate" time="8h ago" readers="123 readers"/>
    </div>
  )
}

function RightContainerContent({title, time,readers}){
    return(
        <>
        <div className='RightContainerContent'>
        <img src="https://th.bing.com/th/id/R.3b3157703e549291baf077634f30da1f?rik=0RhYbH0tUC6gEA&riu=http%3a%2f%2fwww.transparentpng.com%2fthumb%2fcircle%2fdZqOxa-circle-icon-png.png&ehk=OHITDcUbkrS0O3l5O5LWlPxlzWmgErk8h8kNAFJGN%2fc%3d&risl=&pid=ImgRaw&r=0" alt="" width="5px" />
        <span>{title}</span>
        </div>
        <div className='RightContainerContentBottom'>{time} &#8226; {readers}</div>
        </>
    )
}