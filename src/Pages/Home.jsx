import {  useNavigate } from "react-router-dom";
import style from "../CSS/Home.module.scss"
import Logo from "../Media/HivevantageWhite.png"
import { IoCaretForwardOutline } from "react-icons/io5";
import ServicesCard from "../Components/HomeComponents/ServicesCard";
import MarketingImg from "../Media/Marketing.jpeg"
import SoftwareImg from "../Media/Software.jpg"
import WebsiteImg from "../Media/website.jpeg"

const Home = ()=>{

    const Navigate = useNavigate();

    const KnowMoreButton = ()=>{
        Navigate("/about-us")
    }

    const Services = [
        {
            id:1,
            bgmIMG:WebsiteImg,
            title:"Website Development",
            details:"we will create a website for you!",
            content:[
                "UI/UX Development",
                "3D & Anime Website"
            ]
        },
        {
            id:2,
            bgmIMG:SoftwareImg,
            title:"Software Engineering  & Development",
            details:"we will create a website for you!",
            content:[
                "Application Development",
                "Software Development",
                "Digital Transformation",
                "IT Consulting & Advisory",
                "Custom Software Development",
                "Cloud Development"
            ]
        },
        {
            id:2,
            bgmIMG:MarketingImg,
            title:"Marketing & Management",
            details:"we will create a website for you!",
            content:[
                "Digital Marketing",
                "SEO",
                "Products Promoting & Sales Management",
                "Email Marketing",
                "B2B & B2C Leads Generation"
            ]
        },
        
    ];

    return <div id={style.Home}>
        <div id={style.HS1}>
            <div>
                <div id={style.HeroContent}>
                    {/* <p>Welcome to</p> */}
                    <img src={Logo} alt="/Hivevantage" />
                    <hr />
                    <h2>IT Consaltant Company in India</h2>
                    <button onClick={KnowMoreButton}>
                        Know More
                        <IoCaretForwardOutline style={{marginTop:"-1px"}}/>
                    </button>
                </div>
            </div>
        </div>
        <div id={style.HS2}>
            <h1>
                Our Services
            </h1>
            <hr />
            <p>
                At Hive Vantage, we pride ourselves on being a leading IT service consultant company based in India, catering specifically to clients in the UK. With years of experience and a team of highly skilled professionals, we offer a wide range of IT services tailored to meet the unique needs of our UK clients.
            </p>
            <div id={style.ServicesCardList}>
                {
                    Services.map((e)=>{
                        return <ServicesCard {...e} key={e.id} />
                    })
                }
            </div>
        </div> 

    </div>

}

export default Home;