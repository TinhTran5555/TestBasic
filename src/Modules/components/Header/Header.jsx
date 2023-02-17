import React from 'react'
import logo from "../../../Images/logo.png"
import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faXmark} from "@fortawesome/free-solid-svg-icons";
const NavHeader = [
  { text: 'Home', href: '#' },
  { text: 'Product', href: '#' },
  { text: 'Service', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'Contact', href: '#' },

];
const onOpen  = () => {
 document.getElementById("close").style.display= "block"
 document.getElementById("open").style.display= "none"

}
const onClose = () => {
  document.getElementById("close").style.display= "none"
 document.getElementById("open").style.display= "block"


 }
const Header = () => {
  return (
    <header className={style.header}>
      <button id='open' className={style.burger} onClick={onOpen}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      <div className="header-logo">
        <a href="#">
          <img src={logo} alt="logo" />  </a>
      </div>
      <div id='close' className={style.headernav}>  
        <ul >
          <div>
           <h2 >Menu </h2><button onClick={onClose}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
         </div> {NavHeader.map((items) => {
            return (
              <li >
                
              
                <a href={items.href}>{items.text}</a>
              </li>
            )
          })
          }
         
        </ul>

      </div>
      
    </header>
  )
}

export default Header