import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonButton } from '@ionic/react';
import { IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import './ProductList.css';

import { useProductList } from '../hooks/product';



export const ProductList: React.FC = () => {
    // eslint-disable-next-line
    const { products, getProductsData, clearProductsData } = useProductList();
    //useEffect(getProductsData, [useProductList]);
    console.log(products)

    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        console.log('Begin async operation');

        getProductsData();
        event.detail.complete();
    }

    function ProductRefresher() {
        return (
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent
                        pullingText="Pull to refresh"
                        refreshingSpinner="circles"
                        refreshingText="Refreshing...">
                    </IonRefresherContent>
                </IonRefresher>
        )
    }

    if (products.length > 0) {
        return (
            <IonContent>
                <ProductRefresher />

                <IonList>
                    {products.map((product, index) => (
                        <IonItem key={index} routerLink={`/detail/${product.id}`} detail>
                            <IonLabel>{product.title}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
                <IonButton onClick={clearProductsData} >Borrar</IonButton>
            </IonContent>
        )
    } else {
        return (
            <IonContent>
                <ProductRefresher />
                <div className="container">
                    <strong>No hay productos disponibles actualmente</strong>
                </div>
            </IonContent>

        )
    }
};