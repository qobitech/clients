import React from 'react';
import WorkCss from './Work.module.css';
import {One as HeaderFont,Three as Fur,Five,Para} from '../../../reusable/fonts'
import konnectore from '../../../assets/image/work/Konnectore - Presentation@2x.png';


const Work = () => {

    return(

        <div className={WorkCss.work}>

            <div className={WorkCss.topheader}>
                
                <HeaderFont fontClass={WorkCss.headfont}>My Work</HeaderFont>
                
            </div>

            <div className={WorkCss.underlap_container}></div>

            <div className={WorkCss.container}>


                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.my_services}>

                    {/* header */}
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>MY SERVICES</Five>

                    </div>

                    <div className={WorkCss.body_item}>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Business Analysis</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Web Design</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>UI/UX Design</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Branding</Five>
                                
                                </div>

                        </div>

                    </div>

                    {/* body */}
                    <div className={WorkCss.body}>
                        
                            <button className={WorkCss.hire_btn}>
                                Hire Me
                            </button>

                    </div>

                </section>

                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.my_projects}>

                    {/* header */}
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>MY PROJECTS</Five>

                    </div>

                    <div className={WorkCss.nav_sect}>

                        <div className={WorkCss.nav_left}>
                            <span className={WorkCss.nav_arrow}>&#60;</span>
                        </div>

                        <div className={WorkCss.tab_section}>
                            
                            <div className={WorkCss.tab_item}>
                                <Para fontClass={WorkCss.tab_font}>All</Para>
                            </div>

                            <div className={WorkCss.tab_item}>
                                <Para fontClass={WorkCss.tab_font}>UI/UX Design</Para>
                            </div>

                            <div className={WorkCss.tab_item}>
                                <Para fontClass={WorkCss.tab_font}>Branding</Para>
                            </div>

                            <div className={WorkCss.tab_item}>
                                <Para fontClass={WorkCss.tab_font}>Web Design</Para>
                            </div>

                            <div className={WorkCss.tab_item}>
                                <Para fontClass={WorkCss.tab_font}>Business Analysis</Para>
                            </div>

                        </div>

                        <div className={WorkCss.nav_left}>
                            <span className={WorkCss.nav_arrow}>&#62;</span>
                        </div>

                    </div>

                    <div className={WorkCss.body_item}>

                            {/* body */}
                            <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    <img src={konnectore} alt="konnectore web and mobile" />

                                </div>

                                <div className={WorkCss.others}>

                                    <div className={WorkCss.body_header}>
                                    
                                        <div className={WorkCss.header_title}>
                                            <Five fontClass={WorkCss.header_font}>Konnectore Web & Mobile</Five>
                                            <Para fontClass={WorkCss.header_project}>UI/UX Design</Para>
                                        </div>

                                        <div className={WorkCss.header_description}>
                                            <Para fontClass={WorkCss.header_company}>FlexiPGroup</Para>
                                            <Para fontClass={WorkCss.header_year}>2019</Para>
                                        </div>
                                    
                                    </div>

                                    <div className={WorkCss.body_body}>
                                        
                                        <Para fontClass={WorkCss.story}>
                                            Konnectore serves as a social talent discovery platform, and is built to 
                                            bridge the gap between vast talents across and beyond Nigerian borders, and 
                                            opportunities that await them. The platform enables users to engage socially, view talents 
                                            on display and to participate as event contestants.
                                        </Para>

                                        <Para fontClass={WorkCss.story}>
                                            Working as the sole designer and UX lead, with a team of developers. I was responsible for 
                                            the product requirements gathering, interface design, user interaction and experience, as 
                                            well as it's brand representation. As depicted by the UI, I priortized the idea of social 
                                            media and embedded its contest features along those lines.
                                        </Para>
                                                                    
                                    </div>

                                    <div className={WorkCss.body_body}>
                                        <button className={WorkCss.hire_btn}>View Project</button>
                                    </div>
                                
                                </div>

                            </div>

                    </div>

                </section>

            </div>

        </div>

    )
}

export default Work;

