import Loading from '../LoadingScreen/Loading.jsx';
import './Checkout.css';
// Import FontAwesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

// Using FontAwesome icon
const alert = <FontAwesomeIcon icon={faTriangleExclamation} />;

export default function Form({eventSubmit ,loading, verifyData}) {
    return(
        <form className="form" onSubmit={eventSubmit}>
            <h4>Ingrese sus datos</h4>
              <br />
                <div className="input-container">
                    <input name="name" className="input" type="text" placeholder="Nombre" required />
                    <label className="label" data-content="Nombre">
                        <span className="hidden-visually">Nombre</span>
                    </label>
                </div>

                <div className="input-container">
                    <input name="adress" className="input" type="text" placeholder="Dirección" required />
                    <label className="label" data-content="Dirección">
                        <span className="hidden-visually">Dirección</span>
                    </label>
                </div>

                <div className="input-container">
                    <input name="phone" className="input" type="text" placeholder="Número de teléfono" required />
                    <label className="label" data-content="Número de teléfono">
                        <span className="hidden-visually">Número de teléfono</span>
                    </label>
                </div>

                <div className="input-container">
                    <input name="gmail" className="input" type="email" placeholder="Gmail" required />
                    <label className="label" data-content="Gmail">
                        <span className="hidden-visually">Gmail</span>
                    </label>
                </div>
                <div className="input-container">
                    <input name="verifyGmail" className="input" type="email" placeholder="Verificar gmail" required />
                    <label className="label" data-content="Verificar gmail">
                        <span className="hidden-visually">Verificar gmail</span>
                    </label>
                </div>
                <div className='checkout-container'>
                    {verifyData ? <p className='alert-wrong-data'>Revisa tus datos {alert}</p> // Simple alert
                     :  <></>
                    }
                    { 
                    !loading ? <button className='generate-checkout' type='submit'>Generar Orden</button>
                    :
                     <Loading />
                    }
                </div>
        </form>
    )
}