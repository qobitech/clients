import React from 'react';
import Backgroundcss from './Background.module.css';
import {Five,Para} from '../../../reusable/fonts'


const Background = () => {

    return(

        <div className={Backgroundcss.background}>

            <div className={Backgroundcss.container}>

                {/* PROFESSIONAL SUMMARY */}
                <section className={Backgroundcss.professional_summary}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>PROFESSIONAL SUMMARY</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                        <Para fontClass={Backgroundcss.body_font}>
                            I have gained professional experience working
                            as a Business Analyst and UI/UX designer in the 
                            last 4 years. My prior exposure to the logical implementation
                            of programming tools in web development enables me to design functional,
                            usable and intuitive interfaces which depict how objects and actions
                            that are part of an appplication interrelate in ways that mirror and  support
                            real-life user actions.
                            Additionally, in these roles, I have become familiar with illustrating Business 
                            processes and recommending digital automation processes that enable businesses become more 
                            customer-focused, responsive, and also take more.
                        </Para>
                    </div>

                </section>

                 {/* AREA OF EXPERTISE */}
                 <section className={Backgroundcss.area_of_expertise}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>AREA OF EXPERTISE</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                        
                        {/* Image container */}
                        <div className={Backgroundcss.img_container}>

                            <img src="" alt="user research icon" />

                        </div>

                        <div className={Backgroundcss.body_header}>
                        
                            <Five fontClass={Backgroundcss.header_font}>AREA OF EXPERTISE</Five>
                        
                        </div>

                        <div className={Backgroundcss.body_body}>

                            <Para fontClass={Backgroundcss.body_font}>
                                Gather requirements and consumer needs through user 
                                research
                            </Para>

                            <Para fontClass={Backgroundcss.body_font}>
                                Conduct in-depth interviews
                            </Para>

                            <Para fontClass={Backgroundcss.body_font}>
                                Make contextual inquiries and field/dairy studies.
                            </Para>

                            <Para fontClass={Backgroundcss.body_font}>
                                Lead persona creation to optimize user flows and user journeys
                            </Para>

                            <Para fontClass={Backgroundcss.body_font}>
                                Develop site maps and construct wire-frames that facilitate effortless 
                                navigation
                            </Para>

                        </div>

                    </div>

                </section>

                {/* WORK EXPERIENCE */}
                <section className={Backgroundcss.work_experience}>

                    {/* header */}
                    <div className={Backgroundcss.header}>

                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                                
                    </div>

                </section>

                {/* EDUCATION */}
                <section className={Backgroundcss.education}>

                    {/* header */}
                    <div className={Backgroundcss.header}>

                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                                
                    </div>

                </section>

                {/* CERTIFICATION */}
                <section className={Backgroundcss.certification}>

                    {/* header */}
                    <div className={Backgroundcss.header}>

                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                                
                    </div>

                </section>

            </div>
            
        </div>

    )
}

export default Background;

