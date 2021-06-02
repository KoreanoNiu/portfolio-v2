import Load from '../components/Load/Load';
import Head from 'next/head'
import ReactFullpage from "@fullpage/react-fullpage";

import NavbarPortafolio from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects.json';
import Item from '../components/Projects/Item';

const Menu = () => 
    <div
        className="menu"
        style={{
          width: '100vw',
          position: 'absolute',
          zIndex: 100
        }}
    >
        <NavbarPortafolio/>
    </div>


const Portafolio = () =>
    <div>
        <Head>
            <title>PORTAFOLIO | CARLOS GARCIA</title>
            <meta
              name="description"
              content="PORTAFOLIO CARLOS HUMBERTO GARCÍA LIRA"
            />
            
            <meta property="og:title" content="PORTAFOLIO CARLOS HUMBERTO GARCÍA LIRA"/>
            <meta property="og:description" content="PORTAFOLIO CARLOS HUMBERTO GARCÍA LIRA"/>
            <meta property="og:image" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/12022020a7.jpg"/>
            <meta property="og:image:secure_url" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/12022020a7.jpg"/>
            <meta property="og:image" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/150x150.png"/>
            <meta property="og:image:secure_rul" content="https://portafolio-carlos-garcia-17.herokuapp.com/src/img/150x150.png"/>
            <meta property="og:image:type" content="image/jpeg"/>

            <link rel="shortcut icon" href="/static/navegador-web.ico" sizes="64x64"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Load/>
        <div className="App">
        <Menu/>
        <ReactFullpage
          navigation
          anchors={['Astrafit', 'MercadoPago', 'Maquetacion', 'Portafolio', 'Administrador', 'Autocompletado', 'Espacios', 'MarvelFan', 'PopCato']}
          navigationTooltips={['Astrafit', 'MercadoPago', 'Maquetacion', 'Portafolio', 'Administrador', 'Autocompletado', 'Espacios', 'MarvelFan', 'PopCato']}
          navigationTooltip
          scrollingSpeed={1000}
          verticalCentered={false}
          easingcss3='ease-out'
          render={comp =>
             (
              <ReactFullpage.Wrapper>
                {
                      Projects.map((project, id) => {
                          return(
                          <Item
                                key={id}
                                backgroundImage={project.backgroundImage}
                                images= {project.images}
                                urlSite= {project.urlSite}
                                title= {project.title}
                                date= {project.date}
                                description= {project.description}
                                icons= {project.icons}
                                dark={project.dark}
                                certificate={project.certificate}
                          />
                          )
                      })
                }
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    </div>

export default Portafolio;