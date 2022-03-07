import React, { useState } from "react";
//import { GiHamburgerMenu } from "react-icons/gi";
//import { MdClose } from "react-icons/md";
//import { ImSun } from "react-icons/im";
//import { BsFillMoonFill } from "react-icons/bs";
import logoAt from "../assets/logoAt.png";

export default function Navbar() {
    const [navState, setNavState] = useState(false)
    return (
        <nav>
            <div className="brand-container">
                <div className="brand">
                   <img src={logoAt} alt="atLogo" />
                </div>

                <div className="toggle-container">
                    <div className="toggle"></div>
                    <div className="mode"></div>
                </div>
            </div>

            <div className="links-container">
                <ul className="links">
                    <li>
                        <a href="#">Novedades</a>
                    </li>
                    <li>
                        <a href="#">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Dispoditivos Compatibles</a>
                    </li>
                    <li>
                        <a href="#">1 804 298 1205</a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
