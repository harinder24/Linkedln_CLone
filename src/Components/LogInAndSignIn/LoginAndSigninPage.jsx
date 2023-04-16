import React from 'react'
import Header from './Header'
import "./LoginAndSigninPage.css"
function LoginPage() {
  return (
    <div className='LoginAndSigninPageDiv'>
        <Header navigateTo="/signup" btnType="Sign Up"/>
        <div className='LoginAndSigninDivBottomContent'>
            <LeftContent btnType={"Log In"}/>
            <RightContent/>
        </div>
    </div>
  )
}
function SignUpPage() {
    return (
      <div className='LoginAndSigninPageDiv'>
          <Header navigateTo="/login" btnType={"Log In"}/>
          <div className='LoginAndSigninDivBottomContent'>
              <LeftContent btnType={"Sign Up"}/>
              <RightContent/>
          </div>
      </div>
    )
  }



function LeftContent({btnType}){
    return(
        <div className='LoginAndSigninPageDivLeftContent'>
            <h2 className='LoginAndSigninPageDivLeftContent__h2'>Welcome to your professional community</h2>
            <div>
                <h3>Email</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="email" />
                <h3>Password</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="password" />
            </div>
            <button className='LoginAndSigninPageDivLeftContent__button'>{btnType}</button>
        </div>
    )
}

function RightContent(){
    return(
        <div className='LoginPageSigninDivRightContent'>
            <img className='LoginPageSigninDivRightContent__img' src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
        </div>
    )
}

export {LoginPage, SignUpPage}