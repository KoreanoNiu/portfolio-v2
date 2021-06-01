import imgDev from '../img/undraw_web_developer_p3e5.svg';
import BackEnd from '../img/undraw_code_thinking_1jeh.svg';
import Extra from '../img/undraw_dev_productivity_umsq.svg';
import Skill from './Skill';

const Habilities = () =>
    <div className="uk-section uk-section-secondary uk-text-center" data-uk-scrollspy="cls: uk-animation-slide-top-small; target: .uk-card; repeat: true" style={{backgroundColor: '#121212'}}>
        <div className="uk-container uk-container-xlarge">

            <h2 className="uk-margin-bottom">HABILIDADES</h2>
            <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-margin-medium-top" data-uk-grid>
                    <Skill
                        src={imgDev}
                        title="FRONT END" 
                        description="He desarrolado en JavaScript, experiencia en técnicas HTML5, CSS3, Responsive, trabajando con frameworks como SASS, UiKit, Materialize, Bootstrap, jQuery, VueJS, React JS.">
                    </Skill>
                    <Skill
                        src={BackEnd}
                        title="BACK END" 
                        description="Experiencia en PHP, C#(ASP.NET), MySQL, Firebase, desarrollo de páginas web con manejo de base de datos, autenticación a través de redes sociales, uso de roles, formularios de contacto, integración de API Mercado Pago, REST API, recaptcha, etc.">
                    </Skill>
                    <Skill
                        src={Extra}
                        title="SOPORTE Y EXTRAS" 
                        description="Brindo apoyo y orientación sobre cualquier inconveniente que se presente con base en mis conocimientos, hasta nivel intermedio. Tengo conocimientos en el uso de control de versiones (Git, GitHub).">
                    </Skill>
            </div>
        </div>
        <span id="Knowledge"></span>
    </div>

export default Habilities;