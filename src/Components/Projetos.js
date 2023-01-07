
import '../Styles/projetos.css';

import { DiGithubBadge } from "react-icons/di";

function Projetos() {

        return (
          <div className="s-projects">
            <div className="grid-layout">
              <h2>Projetos <span>.</span></h2>
              <div className='projects'>
                <article>
                  <h3>PrimeFlix</h3>
                  <p>
                    Projeto consumindo API do themoviedb, feito com ReactJS e CSS.
                  </p>
                  <a
                    href="https://primeflixcurso.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    ><span>Visualizar projeto</span>
                    <div className='liquid'></div>
                  </a> 
                </article>

                <article>
                  <h3>Lista de Despesas</h3>
                  <p>
                    Projeto armazenando em localstorage, feito com ReactJS e Bootstrap.
                  </p>
                    <a
                      href="https://listadespesas.netlify.app"
                      rel="noreferrer"
                      target="_blank"
                      ><span>Visualizar projeto</span>
                      <div className='liquid'></div>
                    </a>
                  
                </article>
                <article>
                  <h3>Jogo do Mosquito</h3>
                  <p>
                    Projeto feito somente com HTML5, Bootstrap e Javascipt.
                    <br/>
                    <br/>
                  </p>
                  <a
                    href="https://jogodomosquito.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                    id="pokedex"
                    ><span>Visualizar projeto</span>
                  </a>
                </article>
                
              </div>
              <nav>
                <a href='https://github.com/GomesLeandro'
                rel="noreferrer"
                target="_blank">
                <div className='git'>
                  < DiGithubBadge 
                    fontSize={'8rem'}
                    />
                </div>
                </a>
                </nav>
              
            </div>
            
        </div>
            
              
          );
}

export default Projetos;