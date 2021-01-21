import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import React from 'react';
import { navigateOutline } from 'ionicons/icons';
import { ProductList } from '../components/ProductList';
import './Home.css';
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listado de productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProductList />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => {console.log("Abriendo mapita"); history.push('/map');}}>
            <IonIcon icon={navigateOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
