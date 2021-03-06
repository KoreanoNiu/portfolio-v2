import React, {Fragment} from 'react'

import Logo2 from '../img/CL4.svg'

const Menu = () =>{
    return(
        <div
        className="menu"
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 100,
        }}
    >
          <Fragment>
            <div className="uk-navbar-container uk-animation-slide-bottom-medium uk-navbar-transparent uk-text-lighter transparent" data-uk-sticky="animation: uk-animation-slide-top; top: 115;">
                <div className="uk-container uk-container-expand">
                    <div className="uk-navbar">
        
                        <div className="uk-navbar-left">
                            <div className="uk-navbar-item" style={{color: "#ffffff", fontFamily: 'GTWalsheimPro-Bold'}}>
                                <img src={Logo2} alt="" className='logo-nav'/>
                            </div>
                        </div>
        
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav navbar color-white">
                                <li className="uk-active"><a href="#Home">INICIO</a></li>
                                <li><a href="#AboutMe">SOBRE DE MÍ</a></li>
                                <li><a href="#Habilities">HABILIDADES</a></li>
                                <li><a href="#Knowledge">CONOCIMIENTOS</a></li>
                                <li><a href="/portafolio">PROYECTOS</a></li>
                            </ul>
        
                            <a className="uk-button uk-button-primary uk-margin-remove-top uk-border-rounded button" href="#Contact" >CONTACTO</a>
                            <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas" style={{color: "#fff"}}></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: false; mode: slide;">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-box-shadow-small uk-navbar-transparent uk-text-bolder transparent glass">
        
                    <button className="uk-offcanvas-close" type="button" data-uk-close style={{color: "#fff"}}></button>
        
                    <ul className="uk-nav uk-nav-default color-white">
                    <li><a style={{color: "#ffffff"}} href="#Home"><span className="uk-margin-small-right" data-uk-icon="icon: home"/>INICIO</a></li>
                        <li><a href="#AboutMe"><span className="uk-margin-small-right" data-uk-icon="icon: user"/>ACERCA DE MÍ</a></li>
                        <li><a href="#Habilities"><span className="uk-margin-small-right" data-uk-icon="icon: pencil"/>HABILIDADES</a></li>
                        <li><a href="#Knowledge"><span className="uk-margin-small-right" data-uk-icon="icon: bolt"/>CONOCIMIENTOS</a></li>
                        <li><a href="/portafolio"><span className="uk-margin-small-right" data-uk-icon="icon: list"/>PROYECTOS</a></li>
                        <li><a href="#Contact"><span className="uk-margin-small-right" data-uk-icon="icon: comment"/>CONTACTO</a></li>

                        <li className="uk-nav-divider uk-margin-medium-top custom-color" style={{borderTopColor: "#fff"}}></li>
                        <li className="uk-nav-header" style={{color: "#fff"}}>REDES SOCIALES</li>
                        <li>
                            <a href="">
                                <span data-uk-icon="icon: facebook; ratio: 0.8" className="uk-margin-small-right"></span>
                            FACEBOOK
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span data-uk-icon="icon: instagram; ratio: 0.8" className="uk-margin-small-right"></span>
                            INSTAGRAM
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span data-uk-icon="icon: whatsapp; ratio: 0.8" className="uk-margin-small-right"></span>
                            +52 351 129 8049
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span data-uk-icon="icon: mail; ratio: 0.8" className="uk-margin-small-right"></span>
                                robocharley.lego@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    </div>
    )
}

export default Menu;