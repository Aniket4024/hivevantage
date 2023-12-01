import { NavLink, useNavigate } from "react-router-dom";
import style from "../CSS/NavBar.module.scss"
import Logo from "../Media/HivevantageBlack.png"
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MenuBar from "./MenuBar";


const NavBar = ()=>{

    const NavLinks = [
        {
            id:1,
            to:"/",
            text:"Home",
        },
        {
            id:2,
            to:"/about-us",
            text:"About Us",
        },{
            id:3,
            to:"/services",
            text:"Services",
        },{
            id:4,
            to:"/contact",
            text:"Contact",
        },{
            id:5,
            to:"/careers",
            text:"Careers",
        }

    ];

    const [menu,setMenu] = useState(true);

    const MenuToggle = ()=>{
        setMenu(prev=>!prev)
    }

    const Navigate = useNavigate();

    return <>
    
        {
            menu ?

            <div id={style.NavBar}>
                <div id={style.NS1}>
                    <img src={Logo} onClick={()=>Navigate("/")}  alt="Hive Vantage" />
                </div>
                <div id={style.NS2}>
                {
                    NavLinks.map((e)=>{
                        return <NavLink 
                            className={
                                ({ isActive }) =>
                                isActive ? style.ActiveNavLink : style.NavLink
                            }
                            key={e.id}  
                            to={e.to}
                        >
                            {e.text}
                            <div></div>
                        </NavLink>
                    })
                }
                </div>
                <button id={style.NavMenu} onClick={MenuToggle}>
                <IoMenu/>
                </button>
            </div>

            :

            <MenuBar MenuToggle={MenuToggle} />
        }
    
    </>

}

export default NavBar;