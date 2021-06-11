import Head from 'next/head'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Particles from '../components/Particles/Particles'
import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe/AboutMe'
import Habilities from '../components/Habilities/Habilities'
import Knowledge from '../components/Knowledges/Knowledges'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Load from '../components/Load/Load';

const myApp = () =>
{
    return(
        <div>
            <Head>
                <title>PORTAFOLIO | CARLOS GARCIA</title>
                <meta
                  name="description"
                  content="DESARROLLADOR WEB CARLOS HUMBERTO GARCÍA LIRA"
                />
                <meta property="og:title" content="DESARROLLADOR WEB CARLOS HUMBERTO GARCÍA LIRA"/>
                <meta property="og:description" content="¡Hola! mi nombre es Carlos, soy un Desarrollador web, entusiasta y encantado por la programación y la música. Actualmente estoy disponible para trabajar de manera remota, o presencial en la ciudad de Zamora, Michoacán. Si tienes un proyecto que deseas comenzar o consideras que necesitas de mis servicios, ponte en contacto."/>
                <meta property="og:image" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/12022020a7.jpg"/>
                <meta property="og:image:secure_url" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/12022020a7.jpg"/>
                <meta property="og:image" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/150x150.png"/>
                <meta property="og:image:secure_rul" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/150x150.png"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <link rel="shortcut icon" href="/static/navegador-web.ico" sizes="64x64"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Load/>
            <LazyLoadComponent>
                <Navbar/>
                <Particles/>
                <AboutMe/>
                <Habilities/>
                <Knowledge/>
                <Projects/>
                <Contact/>
                <Footer/>
            </LazyLoadComponent>
        </div>
    )
}

export default myApp;

// https://drive.google.com/file/d/1d9OUbIDlOHl7Su6xCquyOj7TfjDuVjFT/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1d9OUbIDlOHl7Su6xCquyOj7TfjDuVjFT

//https://drive.google.com/file/d/1rcRoz8vYxfg2RLfhqpgfB7MF6rwn0Fl6/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1rcRoz8vYxfg2RLfhqpgfB7MF6rwn0Fl6

// https://drive.google.com/file/d/1OzNRJUPJCa98Cuox9qDcgRVOXsjJ_HnZ/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1OzNRJUPJCa98Cuox9qDcgRVOXsjJ_HnZ