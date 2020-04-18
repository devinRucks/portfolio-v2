import React from 'react'
import { FaEye } from "react-icons/fa";
import './navbar.scss'

const Navbar = (props) => {
     // const [iconActive, setIconActive] = useState(false)

     const handleLinkClick = (link) => {
          // setIconActive(true)
          props.linkClicked(link)
     }

     return (
          <div id="navbar-container">
               <div id="project-nav-icon" onClick={() => handleLinkClick('project1')}>
                    <FaEye color={"#555555"} size={35} />
               </div>
          </div>
     )
}

export default Navbar