import { useState, useEffect } from "react";
import { useStorage } from '@ionic/react-hooks/storage';

const PRODUCT_STORAGE = 'products';
export function useProductList() {
    const { get, set } = useStorage();
    const [products, setProducts] = useState<Product[]>([]);

    // Recuperar del almacenamiento la copia local de la BBDD
    useEffect(() => {
        const loadSaved = async () => {
            console.log(PRODUCT_STORAGE);
            const productsString = await get(PRODUCT_STORAGE);
            console.log(productsString);
            const newProducts = (productsString ? JSON.parse(productsString) : []) as Product[];
            setProducts(newProducts);
        };
        loadSaved();
    }, [get]);


    //Obtener los productos del servidor.
    const getProductsData = async () => {
        //Placeholder de productos
        let newProducts: Product[] = [
            {
                id: 1,
                title: "Nocilla",
                description: "Que merendilla",
                price: 2.50
            },
            {
                id: 2,
                title: "Nutella",
                description: "Compre nocilla mejor",
                price: 3.50
            },
        ]
        products.forEach((value) => { newProducts.push(value) })
        setProducts(newProducts);
        set(PRODUCT_STORAGE, JSON.stringify(newProducts));
    }

    const clearProductsData = () => {
        set(PRODUCT_STORAGE,"");
        setProducts([]);
    }


    return {
        products,
        getProductsData,
        clearProductsData
    };

}



export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}