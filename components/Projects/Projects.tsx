import React from 'react';
import Project from './Project';

import AstraFit from '../img/astrafit.png';
import Portafolio from '../img/portafolio.png';
import Maquetacion from '../img/maquetacion.png';
import Administrador from '../img/administrador.jpg';
import Autocompletado from '../img/autocompletado.png';
import PopCat from '../img/popcat.png'
import Espacios from '../img/espacios.png'
import MarvelFan from '../img/marvel-fan.png';
import MercadoPago from '../img/ecommerce.png';

export default function ProjectsSlider() {
    return (
        <div>
            <div className='uk-section uk-section-secondary uk-text-center' data-uk-scrollspy="cls: uk-animation-slide-top-small; target: .uk-card; repeat: true" style={{backgroundColor: '#121212'}}>
                <div className="uk-container uk-container-xlarge">
                    <h2 className="uk-margin-bottom">PROYECTOS</h2>
                    <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex uk-flex-center uk-margin-medium-top" data-uk-grid>
                        <Project
                            url={AstraFit}
                            urlSite="/portafolio#Astrafit"
                        />
                        <Project 
                            dark
                            url={MercadoPago}
                            urlSite="/portafolio#MercadoPago"
                        />
                        <Project 
                            dark                            
                            url={Maquetacion}
                            urlSite="/portafolio#Maquetacion"
                        />
                        <Project
                            url={Portafolio}
                            urlSite="/portafolio#Portafolio"
                        />
                        <Project 
                            dark
                            url={Administrador}
                            urlSite="/portafolio#Administrador"
                        />
                        <Project 
                            dark
                            url={Autocompletado}
                            urlSite="/portafolio#Autocompletado"
                        />
                        <Project
                            url={Espacios}
                            urlSite="/portafolio#Espacios"
                        />
                        <Project
                            url={MarvelFan}
                            urlSite="/portafolio#MarvelFan"
                        />
                        <Project 
                            url={PopCat}
                            urlSite="/portafolio#PopCato"
                        />
                    </div>
                </div>
            </div>
            <span id="Contact"></span>
        </div>
    )   
}
