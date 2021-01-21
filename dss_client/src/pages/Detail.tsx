import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import { navigateOutline } from 'ionicons/icons';
import { Product, useProductList } from '../hooks/product';
import './Home.css';
import { RouteComponentProps, useHistory } from 'react-router-dom';

interface DetailViewProps extends RouteComponentProps<{
    id : string;
}> {}

const Detail: React.FC<DetailViewProps> = ({match}) => {
  const history = useHistory();

  const { products, getProductsData, clearProductsData } = useProductList();

  let product : Product = {id:-1, title:"Vacio", description:"Vacio", price:1.1};


  products.forEach((value) => {
      if(value.id === parseInt(match.params.id)){
          product = value;
          console.log("Valor encontrado");
      }
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
          <IonTitle>{product.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {product.title}
        {product.description}
        {product.price}
      </IonContent>
    </IonPage>
  );
};

export default Detail;
