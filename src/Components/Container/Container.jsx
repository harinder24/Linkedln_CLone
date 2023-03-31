import React from 'react'
import "./Container.css"
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'

export default function Container() {
  return (
    <div className='centerFlex'>
    <div className='Container'>
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
    </div>
    </div>
  )
}
