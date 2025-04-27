import { Children, createContext, useContext, useEffect, useState } from "react";
import { getAllProduct } from "../api/product.api";

const ProdectContext = createContext();

export const ProductProvider = ({children}) =>{
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        getAllProduct()
        .then(res=>{
            setProductList(_=>res.data);
        })
    },[]);

    return (
        <ProdectContext.Provider value={{productList, setProductList}}>
            {children}
        </ProdectContext.Provider>
    );
}

export const useProduct = () =>{
    return useContext(ProdectContext);
}