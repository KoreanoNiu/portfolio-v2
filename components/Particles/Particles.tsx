import Particles from 'react-particles-js';

import JavaScriptLogo from '../img/javascript.svg';
import ReactLogo from '../img/react.cd2ab268.svg';
import sassLogo from '../img/sass-1.svg';
import Laravel from '../img/Laravel.svg';
import gitLogo from '../img/Typescript_logo_2020.svg';
import Logo2 from '../img/CL4.svg'
const ParticlesJS = () =>
    <div id='Home'>
        <div className='uk-section section'>
            <video loop muted autoPlay>
                <source src='https://drive.google.com/uc?export=download&id=1d9OUbIDlOHl7Su6xCquyOj7TfjDuVjFT'/>
            </video>
            <div className='filter'>
            <div>
                <h1 style={{fontFamily: 'Moredat-Bold', color: '#ffffff'}} className='uk-heading-medium uk-text-bold'>
                    DESARROLLADOR WEB<br/><span style={{color: '#FF4742'}}>CARLOS LIRA</span>
                </h1>
                <img src={Logo2} className='logo'/>
            </div>
            </div>
        </div>
        <div className='home-container'>
        <Particles 
        className="particles-js" 
        params={{
            "fps_limit": 90,
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 3,
                    "direction": "bottom",
                    "out_mode": "bounce",
                },
                "shape": {
                    "type": [
                        "image",
                    ],
                    "image": [
                        {
                            "src": ReactLogo,
                            "height": 20,
                            "width": 23
                        },
                        {
                            "src": sassLogo,
                            "height": 25,
                            "width": 25
                        },
                        {
                            "src": JavaScriptLogo,
                            "height": 25,
                            "width": 25
                        },
                        {
                            "src": Laravel,
                            "height": 25,
                            "width": 25
                        },
                        {
                            "src": gitLogo,
                            "height": 25,
                            "width": 25
                        },
                    ]
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "opacity_min": 0.4,
                        "speed": 1,
                        "sync": false
                    },
                    "value": 0.9
                },
                "size": {
                    "value": 30,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 10,
                        "sync": false
                    }
                }
            },
            "retina_detect": false
        }}/>
        </div>
    </div>

export default ParticlesJS;