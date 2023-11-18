import "./CheckoutForm.css"
import {useState} from "react"

const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState ('')
    const [telefono, setTelefono] = useState ('')
    const [mail, setMail] = useState ('')
    const [confirmMail, setConfirmMail] = useState('')
    const [error, setError] = useState('')

    const handleConfirm = (e) => {
    e.preventDefault();

        if (mail === confirmMail) {
        const userData = {
            nombre, telefono, mail, confirmMail
        }
        
        onConfirm (userData)
        
        console.log('Formulario enviado:', {mail});
        } else {
        setError('Los correos electrónicos no coinciden');
        }
        }

    return (
        <div>
            <form onSubmit={handleConfirm} className="Form">
            <label className="Label">
                Nombre
                <input 
                    className="Input"
                    type= "text"
                    value={nombre}
                    onChange={({target}) => setNombre (target.value)} required
                />
            </label>        
        
            <label className="Label">
                Telefono
                <input 
                    className="Input"
                    type= "number"
                    value={telefono}
                    onChange={({target}) => setTelefono (target.value)} required
                />
            </label> 

            <label className="Label">
                Mail
                <input 
                    className="Input"
                    type= "mail"
                    value={mail}
                    onChange={({target}) => setMail (target.value)} required
                />
            </label> 

            <label className="Label">
                Confirmar Mail
                <input 
                    className="Input"
                    type= "mail"
                    value={confirmMail}
                    onChange={({target}) => setConfirmMail (target.value)} required
                />
            </label> 

            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}    

        <div className="Label">
            <button type="submit" className="Submit"> Crear Orden</button>
        </div>
        
        </form>
        </div>
    )

}

export default CheckoutForm