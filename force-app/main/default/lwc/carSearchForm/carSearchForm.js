import { LightningElement, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/CarSearchFormController.getCarTypes';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchForm extends LightningElement {
  carTypes;

  @wire(getCarTypes) 
  wiredCarType({data, error}) {
    if(data) {
      this.carTypes = [{value:'', label: 'All Types'}];
      data.forEach(element => {
        const carType = {};
        carType.label = element.Name;
        carType.value = element.id;
        this.carTypes.push(carType);
      })
    } else if(error) {
      this.ShowToast('Error', error.body.message, 'error');
    }
  }
  
  handleCarTypeChange(event) {

  }

  createNewCarType() {
    
  }
  ShowToast(title, message, variant) {
    const evt = ShowToastEvent({
      title: title,
      message: message,
      variant: variant,
    });

    this.dispatchEvent(evt);
  }

} 