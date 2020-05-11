import React from 'react';
import WorkCss from './Work.module.css';
import {Alpha,One as HeaderFont,Three as Fur,Five,Para} from '../../../reusable/fonts'
import konnectore from '../../../assets/image/work/Konnectore - Presentation@2x.png';
import paymonthly from '../../../assets/image/work/Paymonthly - Presentation@2x.png';
import xela from '../../../assets/image/work/Xela - Presentation@2x.png';
import fpgwebsite from '../../../assets/image/work/FPG Website - Presentation@2x.png';
import udux from '../../../assets/image/work/uduX Presentation - Mobile@2x.png';
import readmore from '../../../assets/image/icons/icon.svg';
import readless from '../../../assets/image/icons/show-less-fold-button.svg';


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
                            <ProjectComponent img={konnectore} 
                                            project={"Konnectore Web & Mobile"} 
                                            project_type={"UI/UX Design"} 
                                            company={"FlexiPGroup"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
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
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent img={paymonthly} 
                                            project={"Pay Monthly Web App"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Freelance"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            Pay Monthly is a financial technology company that stands as a credit facilitator for the quick
                                             purchase of items in a select category. The "Pay Monthly" application is t serve as a 
                                             revamp of the existing solution known as "The Credit Store NG". The team wished to partner 
                                             with popular storefronts in the Nigerian e-commerce ecosystem as well as physical stores in order 
                                             to provide credit payment for household items, furniture, electronics, gadgets and a lot more to 
                                             its registered users.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                            My contribution to this project was focused on designing the customized checkout page which users see 
                                            when they select Pay Monthly as a payment option on one of the partner platforms.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent img={xela} 
                                            project={"Xela - The idea bank Web App"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Freelance"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            Xela is an African platform that enables users share and browse ideas with the end goal of providing 
                                            financial incentives to users with valuable ideas, and also connecting them with potential partners 
                                            and investors.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                            The product serves as an idea hub that lets any user post ideas easily as concepts for a growing network 
                                            of users and also buy or sell issues as a premium user on the platform. This implies that there will be two 
                                            user types or tiers, basic and premium respectively. All users will be able to create profiles and share ideas 
                                            as posts which can be voted up or down by other users on the platform. However, a premium user has access to a 
                                            feature known as "vault", where they can deposit ideas to be bought by other users, as well as purchase ideas 
                                            themselves.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent img={fpgwebsite} 
                                            project={"FPG Website"} 
                                            project_type={"UI/UX Design"} 
                                            company={"FlexiPGroup"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            The project involved the re-design of the company's existing website which required a complete 
                                            overhaul. The initial designs of this interface took me about 9 to 12 days to complete, during which I 
                                            caried out tasks such as client relations, requirements gathering, sketching and wire-framing, interface design and 
                                            prototyping.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent img={udux} 
                                            project={"uduX Mobile Application"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Groove Platforms"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            uduX is a music streaming platform that is growing to become the first stop for African music and with exclusive 
                                            partnerships with global players, give access to a robust catalogue of international content in 
                                            varying media types.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                        On this project, I worked with a 3-man product team to develop the user interface, evaluate UX processes and ensure 
                                        that the product was developed according to functional and usability standards captured in the product requirement 
                                        specifications. I also worked closely with the development team to provide adequate guidance in the implementation of 
                                        the design.
                                    </Para>
                                        
                            </ProjectComponent>
                            
                    </div>

                </section>


                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.my_services}>

                    {/* header */}
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>TESTIMONIALS</Five>

                    </div>

                    <div className={WorkCss.body_item}>

                        {/* body */}
                        <div className={WorkCss.body}>
                        
                        </div>

                    </div>

                </section>


            </div>

        </div>

    )
}

const ProjectComponent = ({img,project,project_type,company,year,project_link,...props}) => {
    
    const [userRead,setUserRead] = React.useState(false);

                return(

                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    <img src={img} alt="konnectore web and mobile" />

                                </div>

                                <div className={WorkCss.second_section}>

                                    <div className={WorkCss.others_mobile}>
                                
                                        <div className={WorkCss.others} style={{height:userRead ? "auto" : "220px" }}>

                                            <div className={WorkCss.body_header}>
                                            
                                                <div className={WorkCss.header_title}>
                                                
                                                    <Five fontClass={WorkCss.header_font}>{project}</Five>
                                                
                                                    <Para fontClass={WorkCss.header_project}>{project_type}</Para>
                                                
                                                </div>

                                                <div className={WorkCss.header_description}>
                                                
                                                    <Para fontClass={WorkCss.header_company}>{company}</Para>
                                                
                                                    <Para fontClass={WorkCss.header_year}>{year}</Para>
                                                
                                                </div>
                                            
                                            </div>

                                            <div className={WorkCss.body_body}>
                                                
                                                {props.children}                   

                                            </div>

                                        </div>
                                    
                                    </div>

                                    <div className={WorkCss.others_no_mobile}>
                                
                                        <div className={WorkCss.others} >

                                            <div className={WorkCss.body_header}>
                                            
                                                <div className={WorkCss.header_title}>
                                                
                                                    <Five fontClass={WorkCss.header_font}>{project}</Five>
                                                
                                                    <Para fontClass={WorkCss.header_project}>{project_type}</Para>
                                                
                                                </div>

                                                <div className={WorkCss.header_description}>
                                                
                                                    <Para fontClass={WorkCss.header_company}>{company}</Para>
                                                
                                                    <Para fontClass={WorkCss.header_year}>{year}</Para>
                                                
                                                </div>
                                            
                                            </div>

                                            <div className={WorkCss.body_body}>
                                                
                                                {props.children}                   

                                            </div>

                                        </div>
                                    
                                    </div>

                                    

                                    <div className={WorkCss.body_body_more}>

                                        <div className={WorkCss.read_command} style={{display: userRead ? "none" : "flex"}}>

                                            <div className={WorkCss.image_container} onClick={()=>{setUserRead(true)}}>
                                            
                                                <img src ={readmore} alt="read more"></img>    
                                            
                                            </div>

                                            <Para fontClass={WorkCss.para}>Read More</Para>
                                        </div>
                                        
                                        <div className={WorkCss.read_command} style={{display: userRead ? "flex" : "none"}}>
                                            
                                            <div className={WorkCss.image_container} onClick={()=>{setUserRead(false)}}>

                                                <img src ={readless} alt="read less"></img>    

                                            </div>
                                            <Para fontClass={WorkCss.para}>Read Less</Para>
                                        </div>                                
                                    
                                    </div>
                                    
                                    <Alpha ahref={project_link} fontClass={WorkCss.project_link_style}>
                                            <button className={WorkCss.hire_btn}>View Project</button>
                                    </Alpha>

                                </div>
                        </div>
                )
};


export default Work;

