import { LightningElement, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/CarSearchFormController.getCarTypes';

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
    }
  }
  
  handleCarTypeChange(event) {

  }

  createNewCarType() {
    
  }

} 