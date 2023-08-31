import { useEffect, useState } from "react";
import { productServices } from "../../api/productServices";
import ProductCard from "../../components/productCard/productCard";
import './index.scss';

const PageProduct = () => {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        const { data: {resposta} } = await productServices.getProduct();
        setProduct(resposta);
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        console.log(product)
    })

    return (
        <section>
            <h2>Page product</h2>
            <div className="Container">
                {product.map((product) => (
                    <div key={product._id}>
                        <ProductCard productProp={product}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PageProduct;