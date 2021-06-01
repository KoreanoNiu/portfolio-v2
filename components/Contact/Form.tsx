import React, { useState } from 'react';

const Form: React.FC<{initial?: string, status?: boolean, textArea?: string}> = ({initial = 'uk-input uk-form-width-large', status = false, textArea = 'uk-textarea'}) => 
    {
        const [name, setName] = useState(initial);
        const [number, setNumber] = useState(initial);
        const [email, setEmail] = useState(initial);
        const [message, setMessage] = useState(textArea);
        const [loading, setLoading] = useState(status);
        const [success, setSuccess] = useState(status);

        const onChange = (event) => {
            actualizarEstado(event.target)
        }
        const actualizarEstado = (campo) =>{
            if (campo.name == 'mensaje') {
                if (campo.value == '') {
                    setMessage('uk-textarea uk-form-danger')
                }else{
                    setMessage('uk-textarea uk-form-success')
                }
            }else if (campo.name == 'email'){
                if (validarEmail(campo.value)) {
                    setEmail('uk-input uk-form-width-large uk-form-success')
                }else{
                    setEmail('uk-input uk-form-width-large uk-form-danger')
                }
            }else if (campo.name == 'nombre'){
                if (campo.value == '') {
                    setName('uk-input uk-form-width-large uk-form-danger')
                }else{
                    setName('uk-input uk-form-width-large uk-form-success')
                }
            }else if (campo.name == 'telefono'){
                if (campo.value == '') {
                    setNumber('uk-input uk-form-width-large uk-form-danger')
                }else{
                    setNumber('uk-input uk-form-width-large uk-form-success')
                }
            }
        }

        const validarEmail = (email) => {
            if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
                return true;
            }else{
                return false;
            }
        }

        const onSubmit = (event) => {
            event.preventDefault();
        
            const dataForm = new FormData(event.target);
            
            if (dataForm.get('nombre') != '' && dataForm.get('telefono') != '' && dataForm.get('email') != '' && dataForm.get('mensaje') != '' && validarEmail(dataForm.get('email'))) {
                setLoading(true);
                setLoading(false)
                
                setSuccess(true);
            }else{
                setName('uk-input uk-form-width-large uk-form-danger')
                setNumber('uk-input uk-form-width-large uk-form-danger')
                setEmail('uk-input uk-form-width-large uk-form-danger')
                setMessage('uk-textarea uk-form-danger')
            }
        }

        return(
                loading ?   <div className="uk-section uk-text-center uk-section-default" style={{backgroundColor: '#121212'}}> 
                                <span data-uk-spinner="ratio: 8;" className="custom-color"></span>
                            </div> 
                : 
                success ?   <div className="uk-section uk-text-center uk-section-default" style={{backgroundColor: '#121212'}}>
                                <span data-uk-icon="icon: check; ratio: 9;" className="custom-color"></span>
                            </div> 
                :
                <form className="uk-grid-small uk-text-left" data-uk-grid onSubmit={onSubmit}>
                    <div className="uk-width-1-3@s uk-margin-top">
                        <label className="uk-form-label uk-text-large" htmlFor="Nombre">Nombre</label>
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                <input className={name} id="Nombre" type="text" placeholder="Nombre..." name="nombre" onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@s uk-margin-top">
                        <label className="uk-form-label uk-text-large" htmlFor="Telefono">Teléfono</label>
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: phone"></span>
                                <input className={number} id="Telefono" type="number" placeholder="Telefóno" name="telefono" onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@s uk-margin-top">
                        <label className="uk-form-label uk-text-large" htmlFor="Email">Email</label>
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
                                <input className={email} id="Email" type="email" placeholder="Email..." name="email" onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-1@s uk-margin-top">
                        <label className="uk-form-label uk-text-large" htmlFor="Mensaje">Mensaje</label>
                        <div className="uk-form-controls">
                            <textarea className={message} rows={10} placeholder="Mensaje..." id="Mensaje" style={{resize: "none"}} name="mensaje" onChange={onChange}></textarea>
                        </div>
                    </div>
                    <div className="uk-width-1-1@s">
                        <button className="uk-button uk-button-primary uk-margin-small-top button2" style={{color: '#ffffff'}}>
                            Enviar
                            <span className="uk-margin-small-left" data-uk-icon="icon: arrow-right"></span>
                        </button>
                    </div>
                </form>

        );
    }

export default Form;