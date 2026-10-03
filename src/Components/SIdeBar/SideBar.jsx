import React from 'react'
import "./SideBar.scss"
import Button from '../Button/Button';
import HeaderNav from '../Header/HeaderNav';

const SideBar = () => {
    const handleButtonClick = () => {
        document.body.classList.remove("pro-sideBar--active"); // Add class to body element

    };
    return (
        <div className='pro-sideBar'>
            <div className='pro-sideBar__wrapper'>
                <div className="menu-top">
                    <div className="menu-header">
                        <div className="header-left">
                            <a href="index.html">
                                <img
                                    src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="pro-close__sideBar">
                            <Button
                                onClick={handleButtonClick}
                                content={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>} />

                        </div>
                    </div>
                    <p className="discription">Inbio is a personal portfolio template. You can customize all.</p>
                </div>

                <HeaderNav />

                {/* <div className='content'>
                    <ul >
                        <li>dfgdfg</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default SideBar