import style from "../CSS/Services.module.scss"
import Counter from "../Components/ServicesComponents/Counter"
import ServicesCarousel from "../Components/ServicesComponents/ServicesCarousel"


const Services = ()=>{

    return <div id={style.Services}>
        <Counter/>
        <div id={style.SS2}>
            <div id={style.SS2S1}>
                <div>
                </div>
                <div>
                    <h1>Website Development</h1>
                    <hr />
                    <p>We Develop Websites For you</p>
                    <ul>
                        <li>UI/UX Development</li>
                        <li>3D & Anime Website</li>
                        <li>Blog Website</li>
                        <li>E-Commerce Website</li>
                        <li>Business Website</li>
                        <li>Finance Website</li>
                    </ul>
                </div>
            </div>
            <div id={style.SS2S2}>
                <div>
                </div>
                <div>
                    <h1>Software Engineering & Development</h1>
                    <hr />
                    <p>We Develop Softwares For you</p>
                    <ul>
                        <li>Application Development</li>
                        <li>Software Development</li>
                        <li>Digital Transformation</li>
                        <li>IT Consulting & Advisory</li>
                        <li>Custom Software Development</li>
                        <li>Cloud Development</li>
                    </ul>
                </div>
            </div>
            <div id={style.SS2S3}>
                <div></div>
                <div>
                    <h1>Marketing & Management</h1>
                    <hr />
                    <p>We will do Marketing For you & Manage All the Social Media</p>
                    <ul>
                        <li>Digital Marketing</li>
                        <li>SEO</li>
                        <li>Product Promoting & Sales Marketing</li>
                        <li>Email Marketing</li>
                        <li>B2B & B2C Leads Generation</li>
                    </ul>
                </div>
            </div>
        </div>
        <ServicesCarousel/>
        
    </div>
}

export default Services