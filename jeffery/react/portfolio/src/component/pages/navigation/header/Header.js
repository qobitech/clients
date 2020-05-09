import React from 'react';
import HeaderCss from './Header.module.css'


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

            </div>

        </header>

    )
}

export default Header;

