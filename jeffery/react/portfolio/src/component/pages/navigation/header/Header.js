import React from 'react';
import HeaderCss from './Header.module.css';
import {Alpha,Six as Fur} from '../../../reusable/fonts';
import pageurl from '../../../framework/pageurl'


const Header = () => {

    return(

        <header className={HeaderCss.header}>
            
            <div className={HeaderCss.container}>

                <div className={HeaderCss.logo}>
                    <img src="" alt="Company Logo" ></img>
                </div>

                <div className={HeaderCss.menu_ham}>

                    <div className={HeaderCss.ham}>
                        <div className={HeaderCss.ham_item} />
                        <div className={HeaderCss.ham_item} />
                        <div className={HeaderCss.ham_item} />
                    </div>

                </div>

                <nav className={HeaderCss.nav}>
                    
                    <ul>

                        <Alpha ahref={pageurl.LANDING_PAGE_URL} fontClass={HeaderCss.alpha}>
                            <li>
                                <Fur fontClass={HeaderCss.four}>Introduction</Fur>
                            </li>
                        </Alpha>

                        <Alpha ahref={pageurl.BACKGROUND_PAGE_URL} fontClass={HeaderCss.alpha}>
                            <li>
                                <Fur fontClass={HeaderCss.four}>My Background</Fur>
                            </li>
                        </Alpha>

                        <Alpha ahref={pageurl.WORK_PAGE_URL} fontClass={HeaderCss.alpha}>
                            <li>
                                <Fur fontClass={HeaderCss.four}>My Work</Fur>
                            </li>
                        </Alpha>

                        <Alpha ahref={pageurl.ARTICLE_PAGE_URL} fontClass={HeaderCss.alpha}>
                            <li>
                                <Fur fontClass={HeaderCss.four}>My Articles</Fur>
                            </li>
                        </Alpha>

                        <Alpha ahref={pageurl.CONTACT_ME_URL} fontClass={HeaderCss.alpha}>
                            <li>
                                <Fur fontClass={HeaderCss.four}>Contact Me</Fur>
                            </li>
                        </Alpha>
                        
                    </ul>

                </nav>

            </div>

        </header>

    )
}

export default Header;