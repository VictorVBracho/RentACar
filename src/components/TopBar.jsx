import '../form.css';
import ListaForm from './ListaFormulario';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <>
        <div className="TopBarcontainer">
            <button className='btnBar btnBar1'>Formulario</button>
            <button className='btnBar' to='/ListaForm'>Lista formulario</button>
        </div>
        </>
    )
}

export default TopBar;
