import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
export default function Header({btnType, navigateTo}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(navigateTo);
    }
  return (
    <div className='loginAndSigHeader'>
        <div>
            <div>
                Linked
            </div>
            <img src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="linkedln" />
        </div>
        <div className='loginAndSigHeader__lastDiv'>
            <div onClick={handleClick}>
                {btnType}
            </div>
        </div>
    </div>
  )
}
