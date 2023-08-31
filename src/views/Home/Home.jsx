import banner from '../../assets/banner.svg';
import logoNike from '../../assets/logoNike.svg';
import logoJordan from '../../assets/logoJordan.svg';

import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='Home'>
            <div className='Home__Container'>
                <div className='Home__Area-top'>
                    <div className='Home__Logo-nike'>
                        <img src={logoNike} />
                    </div>
                    <div className='Home__Logo-jordan'>
                        <img src={logoJordan} />
                    </div>
                </div>
                <div className='Home__Banner'>
                    <Link to={'/products'}>
                        <img src={banner} />
                    </Link>
                </div>
                <div className='Home__Container-frase'>
                    <h1>Just To It</h1>
                </div>
            </div>
        </section>
    )
}

export default Home;