import { LightningElement } from 'lwc';

export default class CarSearch extends LightningElement {
  // without the empty string initially it does not show any car for 'All Types'
    carTypeId = '';

  carTypeSelectHandler(event) {
    this.carTypeId = event.detail;
  }
}