import style from "../CSS/Loading.module.scss"
import logo from "../Media/HivevantageBlack.png"


const Loading = ()=>{
    return <div id={style.Loading}>
        <img src={logo} alt="" />
    </div>
}

export default Loading;