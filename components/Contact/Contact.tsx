import ContactImg from '../img/undraw_mobile_inbox_3h46.svg';
import Form from './Form';

const Contact = () =>
    <div className="uk-section uk-section-secondary uk-text-center" style={{backgroundColor: '#121212'}}>
        <div className="uk-container uk-container-xlarge uk-margin-medium-bottom">
        
            <h2 className="uk-margin-medium-top" data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true">CONTACTO</h2>
            <div className="uk-card uk-card-body uk-width-1@m">
                <div className="uk-column-1-2@m uk-column-divider">
                    <div data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true">
                        <img className="img-contact" src={ContactImg}></img>
                    </div>
                    <div data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true">
                        <h3 className="uk-card-title uk-margin-medium-top">¿TRABAJAMOS JUNTOS?</h3>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Contact;