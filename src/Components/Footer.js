import React from 'react';

import logo from './images/logo4.png';

import '../Styles/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
           <div className="grid-layout">
            <p className="direitos-autorais">© 2023 ledev.com</p>
                <div>
                <p>Powered by</p>
                <img src={logo} alt='logoledev' />
                </div> 
            </div>
        </div>
    )
}

export default Footer;