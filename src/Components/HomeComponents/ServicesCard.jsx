import { useNavigate } from "react-router-dom";
import style from "../../CSS/ServicesCard.module.scss"

const ServicesCard = ({id,bgmIMG,title,details,content})=>{

    const Navigate = useNavigate();

    return <div 
        className={style.ServicesCard} 
        id={id} style={{backgroundImage:`url(${bgmIMG})`}}
        onClick={()=>Navigate("/services")}
    >
        <div>
            <h2>{title}</h2>
            <hr />
            <p>{details}</p>
            <div>
                <ul>
                    {
                        content.map((e)=><li>{e}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>

}

export default ServicesCard;