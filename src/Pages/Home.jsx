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
        <div id={style.HS3}>
            <h1>Our Work</h1>
            <hr />
            <p>We aim to make our clients happy by providing them with the services they desire</p>
            <div id={style.HS3GridLayout}>
                <div className={style.HS3G1}>
                    <div>
                        <h1>Blog Website</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae?</p>
                    </div>
                </div>
                <div className={style.HS3G2}>
                    <div>
                        <h1>E-Commerce Website</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae?</p>
                    </div>
                </div>
                <div className={style.HS3G3}>
                    <div>
                        <h1>Services Website</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae?</p>
                    </div>
                </div>
                <div className={style.HS3G4}>
                    <div>
                        <h1>Business Website</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae?</p>
                    </div>
                </div>
                <div className={style.HS3G5}>
                    <div>
                        <h1>Finance Website</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae?</p>
                    </div>
                </div>
            </div>
        </div>
        <div id={style.HS4}>
            <div className={style.HS4DIV}>
                <div id={style.ImageBox1800}></div>
                <div className={style.ContentBox}>
                    <div>
                        <h1>Expertise in IT Services for UK Clients</h1>
                        <hr />
                        <p>
                            Our company possesses a wealth of expertise and knowledge in providing top-notch IT services
                            to clients in the UK. We understand the specific requirements and challenges faced by
                            businesses in the UK market, allowing us to offer targeted solutions that drive growth and
                            success.
                        </p>
                    </div>
                </div>
                <div id={style.ImageBox1}></div>
            </div>
            <div className={style.HS4DIV}>
                <div id={style.ImageBox2}></div>
                <div className={style.ContentBox}>
                    <div>
                        <h1>Comprehensive Solutions for Every IT Need</h1>
                        <hr />
                        <p>
                            Whether you require assistance with IT infrastructure, software development, cloud services,
                            cybersecurity, or digital transformation, we have got you covered. Our team of experts excels in
                            providing comprehensive IT solutions that are customized to your business objectives and align
                            with the UK industry standards.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.HS4DIV}>
                <div id={style.ImageBox3800}></div>
                <div className={style.ContentBox}>
                    <div>
                        <h1>Understanding the UK Market</h1>
                        <hr />
                        <p>
                            We have a deep understanding of the UK market, including its business landscape, regulatory
                            environment, and customer expectations. This knowledge enables us to deliver IT services that
                            are not only technologically advanced but also aligned with the specific requirements of UK
                            businesses.
                        </p>
                    </div>
                </div>
                <div id={style.ImageBox3}></div>
            </div>
            <div className={style.HS4DIV}>
                <div id={style.ImageBox4}></div>
                <div className={style.ContentBox}>
                    <div>
                        <h1>Client-Centric Approach</h1>
                        <hr />
                        <p>
                            At Hive Vantage, we prioritize our clients' satisfaction above everything else. We believe in
                            establishing long-term partnerships by providing exceptional services and delivering tangible
                            results to our UK clients. Our team works closely with you, understanding your unique goals and
                            challenges to devise IT strategies that drive growth and enhance productivity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id={style.HS5}>
            <h1>Why Choose Us ?</h1>
            <div>
                <ol>
                    <li>
                        Proven Track Record: We have a solid track record of successfully delivering IT
                        solutions to numerous UK clients, ranging from startups to large enterprises
                    </li>
                    <li>
                        Skilled Professionals: Our team consists of highly skilled professionals with
                        extensive experience in the IT industry, ensuring that you receive the best-in-class services
                    </li>
                    <li>
                        Competitive Pricing: We offer competitive pricing models that provide excellent
                        value for your investment, without compromising on the quality of our services.
                    </li>
                    <li>
                        Cutting-Edge Technology: We stay up-to-date with the latest advancements in
                        technology to offer innovative and efficient solutions to our UK clients
                    </li>
                    <li>
                        Excellent Customer Support: Our dedicated support team is available round the
                        clock to address any queries or concerns you may have, ensuring a seamless experience
                        working with us.
                    </li>
                </ol>
            </div>
            <button onClick={()=>Navigate("/contact")}>
                Contact Us
                <IoCaretForwardOutline style={{marginTop:"-1px"}}/>
            </button>
        </div>
    </div>

}

export default Home;