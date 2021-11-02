import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import LL from '@salesforce/resourceUrl/Leaflet';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarLocation extends LightningElement {
    car;

    @wire(CurrentPageReference) pageRef;

    leafletLoaded = false;
    leafletMap;

    connectedCallback(){
        registerListener('carselect', this.fetchCarDetails, this)
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    renderedCallback(){
        if(!this.leafletLoaded){
            Promise.all([
                loadStyle(this, LL+'/leaflet.css'),
                loadScript(this, LL+'/leaflet-src.js')
            ]).then(() =>{
                this.leafletLoaded = true;
            }).catch(error =>{
                this.showToast('ERROR', error.body.message, 'error')
            })
        }
    }

    fetchCarDetails(payload){
        this.car = payload;

        if(this.leafletLoaded){
            // If the leaflet map has not been initialized then initialize the map first and then do the further processing of adding the tile layer and the marker to it.
            if(!this.leafletMap){
                const map = this.template.querySelector('.map');
                if(map){
                    this.leafletMap = L.map(map, {zoomControl: true}).setView([42.356045, -71.085650], 13);
                    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles for Rent A Car'}).addTo(this.leafletMap);
                }
            }
            if(this.car){
                const location = [this.car.Geolocation__Latitude__s, this.car.Geolocation__Longitude__s];

                const leafletMarker = L.marker(location);
                leafletMarker.addTo(this.leafletMap);
                this.leafletMap.setView(location);
            }
            
        }
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    get hasCar(){
        if(this.car){
            return 'slds-is-expanded';
        }
        return 'slds-is-collapsed';
    }

}