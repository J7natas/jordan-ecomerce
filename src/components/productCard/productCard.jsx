import { Link } from "react-router-dom";
import './index.scss';

const ProductCard = ({ productProp }) => {
    return(
        <section className="ProductCard">
            <div className="Product-img">
                <img src={productProp.imgFrente} alt={productProp.nome} />
                    <Link className="product-button" to={`/products/${productProp._id}`}>
                    Ver Detalhes
                    </Link>
            </div>
        </section>
    )
}

export default ProductCard;