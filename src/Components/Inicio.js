import React from 'react';

import '../Styles/inicio.css';
import Typewriter from 'typewriter-effect';

function Inicio() {
    return (
        <div className="s-home">
            <div className="grid-layout">
                <div className="home">
                    <div className="home-container-text">
                        <h1 className="delayMediumReveal">
                            Ajudando empresas a construírem
                            <span> produtos digitais </span> de forma moderna e de alta
                            qualidade.
                        </h1>
                        <p>
                            <Typewriter
                                options={{
                                    strings: ['Uma mistura de Design, Desenvolvimento Front-end e habilidade profissional que vão destacar seu produto no mercado.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
    
                    </div>
                </div>
            </div>
      </div>
    );
}



export default Inicio;