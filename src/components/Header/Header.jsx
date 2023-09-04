import './index.scss';
import iconHeader from '../../assets/iconeHeader.svg';
import { Link } from 'react-router-dom';
import imgCarrinho from '../../assets/iconSacola.svg';

const Header = (props) => {

    const handler = (event) => {
        event.preventDefault();
        const res = event.target[0].value;
        props.onSubmit(res);
        console.log(props);
    }

    return(
        <header className='Header'>
            <div className='Header__Container-icon'>
                <Link to={'/'}>
                    <img src={iconHeader} />
                </Link>
            </div>
            <div className="Header__Container-filter">
                <div className='Header__Carrinho'>
                    <div className='count'></div>
                    <img id='imgCarrinho' src={imgCarrinho} />
                    <div className='Header__MyProducts'>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;