import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonBackButton, IonButtons, IonLoading, IonToast, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { Geolocation } from '@ionic-native/geolocation';

import { MapComponent } from '../components/MapComponent';
import './Home.css';

interface LocationError {
    showError: boolean;
    message?: string;
}

const MapView: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
 

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            setMapLocation([position.coords.latitude, position.coords.longitude]);
            setLoading(false);
            setError({ showError: false });
        } catch (e) {
            setError({ showError: true, message: e.message });
            setLoading(false);
        }
    }

    const [mapLocation, setMapLocation] = useState<[number, number]>([0.0,0.0]);

    useEffect( ()=> {getLocation();}, [useState]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
          <IonTitle>Mapa de ubicación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MapComponent location={mapLocation} />
        <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonButton color="primary" onClick={getLocation}>"Get Location"</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MapView;
