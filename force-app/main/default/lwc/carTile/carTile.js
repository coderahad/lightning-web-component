import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {
  @api car;

  handleCarSelect(event){
    event.preventDefault();

    const carId = this.car.Id;

    const carSelect = new CustomEvent('carSelect', {detail: carId});
    this.dispatchEvent(carSelect);
  }
}