import React from 'react'
import "./IconAndSearch.css"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState  } from 'react';
export default function IconAndSearch() {
const [truth, setTruth] = useState(true)
const setTruthHandler = () => {
  setTruth(!truth);
}
  useEffect(() => {
    const searchContainer = document.getElementById('SearchContainerID');
    
    const searchContainerIcon = document.getElementById('SearchIcon_icon_id');
    const headerLeftOptions = document.getElementById('header_left_options');
    const handleClick = () => {
      if (window.innerWidth <= 768) {
        if(truth){
        headerLeftOptions.style.display = "none";
       
        searchContainer.classList.toggle('SearchContainerToggle');
        searchContainer.lastElementChild.classList.toggle('SecarchInputToggle');
        setTruthHandler()
        
        }else{
          removeToggle()
          setTruthHandler()
        }
      }
    };
    const removeToggle = () => {
      headerLeftOptions.style.display = "flex";
  
      searchContainer.classList.remove('SearchContainerToggle')
      searchContainer.lastElementChild.classList.remove('SecarchInputToggle');
    }
    searchContainer.addEventListener('click', handleClick);
  
    return () => {
      searchContainer.removeEventListener('click', handleClick);
    };
  }, [truth]);
  
  return (
    <div className='Search_Icon_Wrap'>
        <img className='IconAndSearch_img' src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="linkedln" />
        <div id='SearchContainerID' className='SearchContainer'>
            <SearchIcon id="SearchIcon_icon_id" className="SearchIcon_icon" />
            <input className='SecarchInput' type="text" placeholder='Search'/>
        </div>
    </div>
  )
}
