import { LightningElement, api, wire } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
  @api carTypeId;
  cars;
    // with $, wire adaptor become reactive. without $, it is static
  @wire(getCars, {carTypeId : '$carTypeId'}) wiredCars({data, error}) {
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
  carSelectHandler(event){
    const carId = event.detail;
  }

  // Here getCarsFound() was the bug. I followed the aura cmp getter method convention and component return 'No cars found'. 
  get carsFound() {
    if(this.cars){
      return true;
    }
    return false;
  }
}