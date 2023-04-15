import React from 'react'
import Header from './Header'
import "./LoginAndSigninPage.css"
function LoginPage() {
  return (
    <div className='LoginAndSigninPageDiv'>
        <Header></Header>
        <div className='LoginAndSigninDivBottomContent'>
            <LeftContent/>
            <RightContent/>
        </div>
    </div>
  )
}
function SignUpPage() {
    return (
      <div className='LoginAndSigninPageDiv'>
          <Header></Header>
          <div className='LoginAndSigninDivBottomContent'>
              <LeftContentForSignUp/>
              <RightContent/>
          </div>
      </div>
    )
  }



function LeftContent(){
    return(
        <div className='LoginAndSigninPageDivLeftContent'>
            <h2 className='LoginAndSigninPageDivLeftContent__h2'>Welcome to your professional community</h2>
            <div>
                <h3>Email</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="email" />
                <h3>Password</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="password" />
            </div>
            <button className='LoginAndSigninPageDivLeftContent__button'>Log in</button>
        </div>
    )
}
function LeftContentForSignUp(){
    return(
        <div className='LoginAndSigninPageDivLeftContent'>
            <h2 className='LoginAndSigninPageDivLeftContent__h2'>Welcome to your professional community</h2>
            <div>
                <h3>Email</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="email" />
                <h3>Password</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="password" />
                <h3>Retype Password</h3>
                <input className='LoginAndSigninPageDivLeftContent__input' type="password" />
            </div>
            <button className='LoginAndSigninPageDivLeftContent__button'>Sign up</button>
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