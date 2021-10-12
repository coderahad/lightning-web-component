import { LightningElement, api } from 'lwc';
import getExperiences from '@salesforce/apex/CarExperience.getExperiences';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarExperiences extends LightningElement {
 
    @api carId;
    carExperience;

    connectedCallback(){
        this.getCarExperiences();
    }

    getCarExperiences(){
        getExperiences({ carId: this.carId }).then((experiences)=> {
            this.carExperience = experiences;
        }).catch((error)=> {
            this.showToast('ERROR', error.body.message, 'error');
        })
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