import React from 'react';

import HTML from './images/html.png';
import CSS from './images/css.png';
import JavaScript from './images/javascript.png';
import Bootstrap from './images/bootstrap.png';
import Git from './images/git.png';
import react from './images/react.png';
import Firebase from './images/firebase.png';
import GitHub from './images/github.png';


import '../Styles/conhecimentos.css';


const Conhecimentos = () => {
    return (
        <div className='s-skills'>
            <div className='grid-layout'>
                <div className='skills'>
                    <div className='skills-text'>
                    <h2>Conhecimentos<span>.</span></h2>
                    </div>
                    <div className='skills-card'>
                        <article className='html intervalCardReveal'>
                            <span class="skills-cards-name-high">HTML</span>
                            <img src={HTML} alt='HTML icon'className='card-item' />
                        </article>
                        <article className='css intervalCardReveal'>
                            <span class="skills-cards-name-high">CSS</span>
                            <img src={CSS} alt='CSS icon'className='card-item'  />
                        </article>
                        <article className='js intervalCardReveal'>
                            <span class="skills-cards-name-high">JavaScript</span>
                            <img src={JavaScript} alt='JavaScript icon'className='card-item' />
                        </article>
                        <article className='boot intervalCardReveal'>
                            <span class="skills-cards-name-high">Bootstrap</span>
                            <img src={Bootstrap} alt='Bootstrap icon' className='card-item'/>
                        </article>
                        <article className='git intervalCardReveal'>
                            <span class="skills-cards-name-low">Git</span>
                            <img src={Git} alt='Git icon' className='card-item'/>
                        </article>
                        <article className='github intervalCardReveal'>
                            <span class="skills-cards-name-low">GitHub</span>
                            <img src={GitHub} alt='GitHub icon' className='card-item'/>
                        </article>
                        <article className='react intervalCardReveal'>
                            <span class="skills-cards-name-low">React</span>
                            <img src={react} alt='React icon' className='card-item'/>
                        </article>
                        <article className='fire intervalCardReveal'>
                            <span class="skills-cards-name-low">Firebase</span>
                            <img src={Firebase} alt='Firebase icon' className='card-item'/>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conhecimentos;