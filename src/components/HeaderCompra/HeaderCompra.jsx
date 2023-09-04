
import './index.scss';
import iconSacola from '../../assets/iconSacola.svg';
import logoJordan from '../../assets/iconeHeader.svg';

const HeaderCompra = () => {
    return(
        <header>
            <img className='logo' src={logoJordan} />
            <img src={iconSacola} />
        </header>
    )
}

export default HeaderCompra;