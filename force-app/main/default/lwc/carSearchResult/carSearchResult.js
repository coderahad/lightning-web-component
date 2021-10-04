import { LightningElement, api, wire } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
  @api carTypeId;
  cars;

  @wire(getCars, {carTypeId : this.carTypeId}) wiredCars({data, error}) {
    if(data) {
      this.cars = data;
    } else if(error) {
      this.showToast('ERROR', error.body.message, 'error');
    }
  }
  showToast(title, message, variant) {
    const evt = ShowToastEvent({
      title: title,
      message: message,
      variant: variant,
    });

    this.dispatchEvent(evt);
  }

  getCarsFound() {
    if(this.cars){
      return true;
    }
    return false;
  }
}