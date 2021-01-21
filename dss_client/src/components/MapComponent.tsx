import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import './MapComponent.css';

interface MapComponentProps{
    location : [number, number];
}

export const MapComponent: React.FC<MapComponentProps> = ({location}) => {

    const ChangeView = ( props:any) => {
        const map = useMap();
        var centro : [number, number] =  [0.0,0.0];
        if(props.centro){
            centro = props.centro;
        }
        console.log("Actualizando centro a " + props.centro);
        map.setView(centro);
        return null;
      }

    return (
        <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
            <ChangeView centro={location} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    Tu ubicación actual.
                </Popup>
            </Marker>
        </MapContainer>
)
};

