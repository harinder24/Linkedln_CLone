import React from 'react'
import "./IconAndSearch.css"
import SearchIcon from '@mui/icons-material/Search';
export default function IconAndSearch() {
  return (
    <div className='Search_Icon_Wrap'>
        <img className='IconAndSearch_img' src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="linkedln" />
        <div className='SearchContainer'>
            <SearchIcon className="SearchIcon_icon" />
            <input type="text" placeholder='Search'/>
        </div>
    </div>
  )
}
