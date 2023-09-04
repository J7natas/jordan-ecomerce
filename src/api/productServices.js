import axios from "axios";

const BASE_URL = 'https://api-jordans.vercel.app/jordans';


const whitebaseUrl = (path) => `${BASE_URL}${path}`;

export class productServices {
    static getProduct(){
        return axios(whitebaseUrl("/obter"))
    }

    static getProductId(_id){
        return axios(whitebaseUrl(`/obter/${_id}`))
    }

    static getProductCor(cor){
        return axios(whitebaseUrl(`/cor/${cor}`))
    }

    static geProductTipo(tipo){{
        return axios(whitebaseUrl(`/tipo/${tipo}`))
    }}

    static gegtProductPosicao(posicao){
        return axios(whitebaseUrl(`/posicao/${posicao}`))
    }
}