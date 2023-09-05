import { useEffect, useState, useRef } from "react";
import { productServices } from "../../api/productServices";
import ProductCard from "../../components/productCard/productCard";

import { PropagateLoader } from "react-spinners";

import './index.scss';
import setaEsquerda from '../../assets/setaEsquerda.svg';
import setaDireita from '../../assets/setaDireita.svg';

import Header from "../../components/Header/Header";
import Banner from '../../assets/BannerPrincipal.svg';

const PageProduct = ({searchProp}) => {


    const [product, setProduct] = useState([]);
    const slide = useRef(null);
    const slide2 = useRef(null);
    const slide3 = useRef(null);
    const slide4 = useRef(null);
    const slide5 = useRef(null);

    const getProducts = async () => {
        const { data: {resposta} } = await productServices.getProduct();
        setProduct(resposta);
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        console.log(product);
        console.log(searchProp)
    });

    const handlerLeft = (e) => {
        e.preventDefault();
        slide.current.scrollLeft -= slide.current.offsetWidth;
    }

    const handlerLeft2 = (e) => {
        e.preventDefault();
        slide2.current.scrollLeft -= slide.current.offsetWidth;
    }

    const handlerLeft3 = (e) => {
        e.preventDefault();
        slide3.current.scrollLeft -= slide.current.offsetWidth;
    }

    const handlerLeft4 = (e) => {
        e.preventDefault();
        slide4.current.scrollLeft -= slide.current.offsetWidth;
    }

    const handlerLeft5 = (e) => {
        e.preventDefault();
        slide5.current.scrollLeft -= slide.current.offsetWidth;
    }

    const handlerRight = (e) => {
        e.preventDefault();
        slide.current.scrollLeft += slide.current.offsetWidth;
    }

    const handlerRight2 = (e) => {
        e.preventDefault();
        slide2.current.scrollLeft += slide.current.offsetWidth;
    }

    const handlerRight3 = (e) => {
        e.preventDefault();
        slide3.current.scrollLeft += slide.current.offsetWidth;
    }

    const handlerRight4 = (e) => {
        e.preventDefault();
        slide4.current.scrollLeft += slide.current.offsetWidth;
    }

    const handlerRight5 = (e) => {
        e.preventDefault();
        slide5.current.scrollLeft += slide.current.offsetWidth;
    }

    return (
        <section className="ProductPage">
            <Header />
            <div className="ProductPage__Banner">
                <img src={Banner} />
            </div>

            <div className="ProductPage__Cont-cards">
                <img id="setaEsquerda" onClick={handlerLeft} src={setaEsquerda} alt="Scroll Esquerda" />
                <div className="ProductPage__Container" ref={slide}>
                    {product.slice(0, 25).map((product) => (
                        <div key={product._id}>
                            <ProductCard productProp={product}/>
                        </div>
                    ))}
                </div>
                <img id="setaDireita" onClick={handlerRight} src={setaDireita} alt="Scroll Direita"/>
            </div>

            <div className="ProductPage__Cont-cards">
                <img id="setaEsquerda" onClick={handlerLeft2} src={setaEsquerda} alt="Scroll Esquerda"/>
                <div className="ProductPage__Container2" ref={slide2}>
                    {product.slice(26, 46).map((product) => (
                        <div key={product._id}>
                            <ProductCard productProp={product}/>
                        </div>
                    ))}
                </div>
                <img id="setaDireita" onClick={handlerRight2} src={setaDireita} alt="Scroll Direita" />
            </div>
            
            <div className="ProductPage__Cont-cards">
                <img id="setaEsquerda" onClick={handlerLeft3} src={setaEsquerda} alt="Scroll Esquerda" />
                <div className="ProductPage__Container3" ref={slide3}>
                    {product.slice(47, 67).map((product) => (
                        <div key={product._id}>
                            <ProductCard productProp={product}/>
                        </div>
                    ))}
                </div>
                <img id="setaDireita" onClick={handlerRight3} src={setaDireita} alt="Scroll Direita" />
            </div>
            
            <div className="ProductPage__Cont-cards">
                <img id="setaEsquerda" onClick={handlerLeft4} src={setaEsquerda} alt="Scroll Esquerda" />
                <div className="ProductPage__Container4" ref={slide4}>
                    {product.slice(68, 88).map((product) => (
                        <div key={product._id}>
                            <ProductCard productProp={product}/>
                        </div>
                    ))}
                </div>
                <img id="setaDireita" onClick={handlerRight4} src={setaDireita} alt="Scroll Direita" />
            </div>

            <div className="ProductPage__Cont-cards">
                <img id="setaEsquerda" onClick={handlerLeft5} src={setaEsquerda} alt="Scroll Esquerda" />
                <div className="ProductPage__Container5" ref={slide5}>
                    {product.slice(89, 100).map((product) => (
                        <div key={product._id}>
                            <ProductCard productProp={product}/>
                        </div>
                    ))}
                </div>
                <img id="setaDireita" onClick={handlerRight5} src={setaDireita} alt="Scroll Direita" />
            </div>
        </section>
    )
}

export default PageProduct;