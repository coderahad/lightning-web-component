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

    fetchCarDetails(car){

    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

}