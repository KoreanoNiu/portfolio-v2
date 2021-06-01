import imgProfile from '../img/12022020a7.jpg';

const AboutMe = () => 
    <div className="uk-section uk-section-secondary uk-text-center " id="AboutMe" data-uk-scrollspy="cls: uk-animation-slide-top-small; target: .uk-card; repeat: true" style={{backgroundColor: '#121212'}}>
        <div className="uk-container uk-container-xlarge">

            <h2 className="uk-margin-medium-top uk-text-bold" data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true">¿QUIÉN SOY?</h2>
            <div className="uk-card uk-card-body uk-width-1@m">
                <div className="uk-column-1-2@s">
                    <div>
                        <img
                            src= {imgProfile}
                            className="uk-border-rounded uk-box-shadow-large img-about-me"
                        />
                    </div>
                    <div>
                        <h3 className="uk-card-title uk-margin-medium-top uk-text-bold">ACERCA DE MÍ</h3>
                        <p>¡Hola! mi nombre es <span className="uk-text-bold uk-text-emphasis">Carlos</span>, soy un <span className="uk-text-bold uk-text-emphasis">Desarrollador Web</span>, entusiasta y encantado por la programación, y la música. Actualmente estoy disponible para trabajar de manera <span className="uk-text-bold uk-text-emphasis">remota</span>, o presencial en la ciudad de <span className="uk-text-bold uk-text-emphasis">Zamora, Michoacán</span>. Si tienes un proyecto que deseas comenzar o consideras que necesitas de mis servicios, ponte en contacto.</p>
                        <a className="button2 uk-button uk-button-primary uk-button-medium uk-border-rounded"
                            style={{color: '#ffffff'}} 
                            href="https://portafolio-carlos-garcia-17.herokuapp.com/src/pdf/carlosgarcia-cv.pdf">
                            VER C.V
                            <span data-uk-icon="icon: file-text; ratio: 1" className="uk-margin-small-left custom-white"></span>
                        </a>
                        <br/>
                        <a className="button2 uk-button uk-button-primary uk-button-medium uk-border-rounded uk-margin-top" 
                            style={{color: '#ffffff'}} 
                            href="https://api.whatsapp.com/send?phone=523511298049&text=¿Hola,%20qué%20tal?%0aNecesito de tus servicios,%20me%20gustaría%20saber%20más%20sobre%20ello.">
                            ¡Contáctame!
                            <span data-uk-icon="icon: whatsapp; ratio: 0.8" className="uk-margin-small-left custom-white"></span>
                        </a>

                    </div>
                </div>

            </div>
        </div>
        <span id="Habilities"></span>
    </div>

export default AboutMe;