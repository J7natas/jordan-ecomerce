import axios from "axios";

const BASE_URL = 'https://api-jordans.vercel.app/doc/';

const whitebaseUrl = (path) => `${BASE_URL}${path}`;

export class peoductServices {
    static getProduct(){
        return axios(whitebaseUrl("jordans/obter"))
    }

    static getProductId(id){
        return axios(whitebaseUrl(`/jordans/obter/${id}`))
    }

    static getProductCor(cor){
        return axios(whitebaseUrl(`jordans/cor/${cor}`))
    }

    static geProductTipo(tipo){{
        return axios(whitebaseUrl(`jordans/tipo/${tipo}`))
    }}

    static gegtProductPosicao(posicao){
        return axios(whitebaseUrl(`jordans/posicao/${posicao}`))
    }
}