import Particles from '../components/Particles/Particles'
import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe/AboutMe'
import Habilities from '../components/Habilities/Habilities'
import Knowledge from '../components/Knowledges/Knowledges'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const myApp = () =>
{
    return(
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
    )
}

export default myApp;

// https://drive.google.com/file/d/1d9OUbIDlOHl7Su6xCquyOj7TfjDuVjFT/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1d9OUbIDlOHl7Su6xCquyOj7TfjDuVjFT

//https://drive.google.com/file/d/1rcRoz8vYxfg2RLfhqpgfB7MF6rwn0Fl6/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1rcRoz8vYxfg2RLfhqpgfB7MF6rwn0Fl6

// https://drive.google.com/file/d/1OzNRJUPJCa98Cuox9qDcgRVOXsjJ_HnZ/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1OzNRJUPJCa98Cuox9qDcgRVOXsjJ_HnZ