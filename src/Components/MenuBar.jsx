import { NavLink } from "react-router-dom";
import style from "../CSS/MenuBar.module.scss"
import { IoClose } from "react-icons/io5";


const MenuBar = ({MenuToggle})=>{

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

    return <div id={style.MenuBar} className={style.MenuBar}  >
        <button>
            <IoClose onClick={MenuToggle}/>
        </button>
        <div>
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
    </div>

}

export default MenuBar;