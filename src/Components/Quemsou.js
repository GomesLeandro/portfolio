import React from 'react';
import le from './images/le.png';

import '../Styles/quemsou.css';



function Quemsou() {
    return (
        <div className="s-about">
            <div className='grid-layout'>                
                <div className='about'>
                    <img src={le} alt='le' className='about-photo'  />
                    <div className='about-text'>                    
                        <h2>Quem sou<span>.</span></h2>
                        <p>Eu sou Leandro Gomes, Desenvolvedor Front-end com experiência em React.js, JavaScript, Bootstrap, Firebase e consumo de APIs. Apaixonado pelo desenvolvimento de componentes, tendo facilidade em aprender e descobrir novos mundos e tecnologias. Desenvolvendo interfaces inteligentes e de alta qualidade, concetrando em perfomance, animações, responsividade e SEO.   </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quemsou;