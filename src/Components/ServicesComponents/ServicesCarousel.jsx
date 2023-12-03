import style from "../../CSS/ServicesCarousel.module.scss"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import digitalMarketing from "../../Media/DigitalMarketing.jpg"
import SEM from "../../Media/SEM.jpg"
import CloudDevelopment from "../../Media/CloudComuping.jpg"
import SEO from "../../Media/SEO.jpg"
import MetaAds from "../../Media/MetaAds.jpg"
import Website from "../../Media/website.jpeg"
import SocialMedia from "../../Media/SocialMediaManager.jpg"
import BusinessIntelligence from "../../Media/BusinessIntelligence.jpg"
import SoftwareDevelopment from "../../Media/SoftwareDevelopment.jpg"
import graphicsDesign from "../../Media/GraphicsDesigning.jpg"
import ApplicationDevelopment from "../../Media/AppDevelopment.jpg"
import DataScience from "../../Media/DataScience.jpg"
import BrandIdentity from "../../Media/BrandIdentity.jpg"
import SoftwareEngineering from "../../Media/SoftwareEngineering.jpg"
import VirtualAssistant from "../../Media/VirtualAssistant.jpg"



const Data = [
    {
        id:1,
        image:digitalMarketing,
        text:"Digital Marketing"
    },
    {
        id:2,
        image:SEM,
        text:"Search Engine Marketing"
    },
    {
        id:3,
        image:CloudDevelopment,
        text:"Cloud Development"
    },
    {
        id:4,
        image:SEO,
        text:"SEO Manager"
    },
    {
        id:5,
        image:MetaAds,
        text:"Meta Ads Manager"
    },
    {
        id:6,
        image:Website,
        text:"Website Development"
    },
    {
        id:7,
        image:SocialMedia,
        text:"Social Media Manager"
    },
    {
        id:8,
        image:BusinessIntelligence,
        text:"Business Intelligence"
    },
    {
        id:9,
        image:SoftwareDevelopment,
        text:"Custom Software Development"
    },
    {
        id:10,
        image:graphicsDesign,
        text:"Graphics Designing"
    },
    {
        id:11,
        image:ApplicationDevelopment,
        text:"Application Development"
    },
    {
        id:12,
        image:DataScience,
        text:"Data Science"
    },
    {
        id:13,
        image:BrandIdentity,
        text:"Brand Identity"
    },
    {
        id:14,
        image:SoftwareEngineering,
        text:"Software Engineering"
    },
    {
        id:15,
        image:VirtualAssistant,
        text:"Virtual Assistant"
    }
]




const ServicesCarousel = ()=>{
    return <>
    
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
            rewind: true,
            gap   : '0px',
            type   : 'loop',
            perPage: 5,
            perMove: 1,
            pagination:false ,
            autoplay:true,
            speed:500,
            }}
            id={style.ServicesCarousel}
        >
            {
                Data.map((e)=>{
                    return <SplideSlide className={style.Slide} key={e.id}>
                        <div style={{
                            backgroundImage:`url(${e.image})`
                        }}>
                        <div>
                            {e.text}
                        </div>
                        </div>
                    </SplideSlide>
                })
            }
        </Splide>



        <Splide 
            aria-label="My Favorite Images" 
            options={ {
            rewind: true,
            gap   : '0px',
            type   : 'loop',
            perPage: 4,
            perMove: 1,
            pagination:false ,
            autoplay:true,
            speed:500,
            }}
            id={style.ServicesCarousel2}
        >
            {
                Data.map((e)=>{
                    return <SplideSlide className={style.Slide} key={e.id}>
                        <div style={{
                            backgroundImage:`url(${e.image})`
                        }}>
                        <div>
                            {e.text}
                        </div>
                        </div>
                    </SplideSlide>
                })
            }
        </Splide>


        <Splide 
            aria-label="My Favorite Images" 
            options={ {
            rewind: true,
            gap   : '0px',
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            pagination:false ,
            autoplay:true,
            speed:500,
            }}
            id={style.ServicesCarousel3}
        >
            {
                Data.map((e)=>{
                    return <SplideSlide className={style.Slide} key={e.id}>
                        <div style={{
                            backgroundImage:`url(${e.image})`
                        }}>
                        <div>
                            {e.text}
                        </div>
                        </div>
                    </SplideSlide>
                })
            }
        </Splide>
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
            rewind: true,
            gap   : '0px',
            type   : 'loop',
            perPage: 2,
            perMove: 1,
            pagination:false ,
            autoplay:true,
            speed:500,
            }}
            id={style.ServicesCarousel4}
        >
            {
                Data.map((e)=>{
                    return <SplideSlide className={style.Slide} key={e.id}>
                        <div style={{
                            backgroundImage:`url(${e.image})`
                        }}>
                        <div>
                            {e.text}
                        </div>
                        </div>
                    </SplideSlide>
                })
            }
        </Splide>
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
            rewind: true,
            gap   : '0px',
            type   : 'loop',
            perPage: 1,
            perMove: 1,
            pagination:false ,
            autoplay:true,
            speed:500,
            }}
            id={style.ServicesCarousel5}
        >
            {
                Data.map((e)=>{
                    return <SplideSlide className={style.Slide} key={e.id}>
                        <div style={{
                            backgroundImage:`url(${e.image})`
                        }}>
                        <div>
                            {e.text}
                        </div>
                        </div>
                    </SplideSlide>
                })
            }
        </Splide>
    </>
}

export default ServicesCarousel;