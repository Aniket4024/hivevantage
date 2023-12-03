import { useNavigate } from "react-router-dom";
import style from "../CSS/Footer.module.scss"
import HiveVantageWhite from "../Media/HivevantageWhite.png"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoCaretForwardOutline } from "react-icons/io5";


const Footer = ()=>{


    const navigate = useNavigate();

    return <div id={style.Footer}>
        <div id={style.FS1}>
            <div id={style.FS1C1}>
                <div>
                    <img src={HiveVantageWhite} alt="" onClick={()=>navigate("/")}/>
                    <hr />
                    <p>IT Consaltant Company in India</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/" target="blank"><FaInstagram className={style.Icons}/></a>
                    <a href="https://www.facebook.com/" target="blank"><FaFacebookSquare className={style.Icons}/></a>
                    <a href="https://www.linkedin.com/" target="blank"><FaLinkedin className={style.Icons}/></a>
                    <a href="https://www.twitter.com/" target="blank"><FaTwitter className={style.Icons}/></a>
                    <a href="https://www.whatsapp.com/" target="blank"><FaWhatsapp className={style.Icons}/></a>
                </div>
            </div>
            <div id={style.FS1C2}>
                <h3>Address</h3>
                <p>
                    3rd floor, Bama Complex
                    <br />
                    Ram Nagar South, Madipakkam
                    <br />
                    Chennai, Tamil Nadu
                    <br />
                    - 600091
                </p>
            </div>
            <div id={style.FS1C3}>
                <h3>Contact</h3>
                <hr />
                <p>
                    +91-6380820205
                    <br />
                    info@hivevantage.org
                </p>
                <button onClick={()=>navigate("/contact")}>
                    Contact Us
                    <IoCaretForwardOutline style={{marginTop:"-3px"}}/>
                </button>
                <h3>Careers</h3>
                <hr />
                <p>
                    careers@hivevantage.com
                </p>
                <button onClick={()=>navigate("/careers")}>
                    Careers
                    <IoCaretForwardOutline style={{marginTop:"-3px"}}/>
                </button>
            </div>
        </div>
        <div id={style.FS2}>
            Hivevantage © 2023. All rights reserved.
        </div>
    </div>
}

export default Footer;