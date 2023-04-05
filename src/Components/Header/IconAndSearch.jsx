import React from 'react'
import "./IconAndSearch.css"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState  } from 'react';
export default function IconAndSearch() {





   
  const addToggle = () => {
    const searchContainer = document.getElementById('SearchContainerID');
    
  const searchContainerIcon = document.getElementById('SearchIcon_icon_id');
  const headerLeftOptions = document.getElementById('header_left_options');
    // headerLeftOptions.style.display = "none";
    headerLeftOptions.classList.add('hide');
    searchContainer.classList.toggle('SearchContainerToggle');
    searchContainer.lastElementChild.classList.toggle('SecarchInputToggle');
  }
  const removeToggle = () => {
    const searchContainer = document.getElementById('SearchContainerID');
    
  const searchContainerIcon = document.getElementById('SearchIcon_icon_id');
  const headerLeftOptions = document.getElementById('header_left_options');
    // headerLeftOptions.style.display = "flex";
    headerLeftOptions.classList.remove('hide');
    searchContainer.classList.remove('SearchContainerToggle')
    searchContainer.lastElementChild.classList.remove('SecarchInputToggle');
  }
  function SearchIconHandler(){
    const headerLeftOptions = document.getElementById('header_left_options');
    if (window.innerWidth <= 768){
    
        if(headerLeftOptions.classList.contains("hide")){
          removeToggle()
 
        
        }else{
          addToggle()
       
        }
      
    }
    else if(headerLeftOptions.style.display == "none"){
      removeToggle()
      
    }
  }

  return (
    <div className='Search_Icon_Wrap'>
        <img className='IconAndSearch_img' src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="linkedln" />
        <div  id='SearchContainerID' className='SearchContainer'>
            <SearchIcon onClick={SearchIconHandler} id="SearchIcon_icon_id" className="SearchIcon_icon" />
            <input className='SecarchInput' type="text" placeholder='Search'/>
        </div>
    </div>
  )
}
