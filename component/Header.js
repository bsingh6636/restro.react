import { useState } from "react"

 export const Header = () => {
  let [btnname,setbtnname] = useState('login')
 return(
    <div className="header">
      <img
        id="logo"
        src="https://i.postimg.cc/65fgCPgN/Screenshot-152.png"
        alt="disappeared"
      ></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="loginbtn" onClick={()=>{
          btnname ==('login') ? setbtnname('logout') : setbtnname('login') }}>{btnname}</button>
      </ul>
    </div>
    )
 }