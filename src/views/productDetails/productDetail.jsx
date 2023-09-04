import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productServices } from "../../api/productServices";

import './index.scss';
import Header from "../../components/Header/Header";

const ProductDetail = ()=> {
    const [Jordan, setJordan] = useState({});
    const { _id } = useParams();

    const getJordan = async () => {
        const { data: {resposta} } = await productServices.getProductId(_id);
        setJordan(resposta);
    }

    useEffect(() => {
        getJordan()
    }, [])

    useEffect(() => {
    })

    let imgPrimmcipal = document.querySelector('#imgPincpal');
    let imgLado = document.querySelector('#imgLado');
    let imgTras = document.querySelector('#imgTras');
    let imgFrente = document.querySelector('#imgFrente');


    function handlerImageLado() {
            imgPrimmcipal.src = Jordan.imgLado;
            imgLado.style.border = '2px solid red';
            imgFrente.style.border = 'none';
            imgTras.style.border = 'none';
    }

    function handlerImageTras() {
        imgPrimmcipal.src = Jordan.imgTras;
        imgTras.style.border = '2px solid red';
        imgLado.style.border = 'none';
        imgFrente.style.border = 'none';
    }

    function handlerImageFrente() {
        imgPrimmcipal.src = Jordan.imgFrente;
        imgFrente.style.border = '2px solid red';
        imgLado.style.border = 'none';
        imgTras.style.border = 'none';
    }

    let headerCarrinho = document.querySelector('Header .Header__MyProducts');

    let count = document.querySelector('Header .count');
    let num = 0;
    let x = 0;


    function addCarrinho() {
        headerCarrinho.innerHTML = `
        <div id="Carrinho">
        <div class="flex">
            <img src=${Jordan.imgFrente} />
            <div>
                <h5>${Jordan.nome}</h5>
                <p>$${Jordan.preco} ${x+=1}x</p>
            </div>
        </div>
        </div>
        `
            count.style.display = 'block'
            count.innerHTML = num += 1;
            }

    return(
        <div>
            <Header />
            <section className="ProductDetail">
                <div className="ProductDetail__detalhes">
                    <div className="ProductDetail__Are-left">
                        <img id="imgPincpal" src={Jordan.imgFrente} />
                        <h2>{Jordan.nome}</h2>
                        <p>{Jordan.descricao}</p>
                    </div>
                    <div className="ProductDetail__Area-rigth">
                        <div className="ProductDetail__Container-imgs">
                            <img onClick={handlerImageLado} id="imgLado" src={Jordan.imgLado} />
                            <img onClick={handlerImageTras} id="imgTras" src={Jordan.imgTras} />
                            <img onClick={handlerImageFrente} id="imgFrente" src={Jordan.imgFrente} />
                        </div>
                        <div className="ProductDetail__Area-compra">
                            <p className="ProductDetail__Preco">Preço: ${Jordan.preco}</p>
                            <p>Cor: {Jordan.cor}</p>
                            <button onClick={addCarrinho} className="ProductDetail__Button-compra">Comprar</button>
                            <Link to={'/products'}>
                                <button className="ProductDetail__Button-voltar">Voltar</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    )
}

export default ProductDetail;