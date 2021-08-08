import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
  @track displayDiv = false;

  @track cityList = ['Dhaka', 'New York', 'Dubai', 'Montreal'];
  showDivHandler(event) {
    this.displayDiv = event.target.checked;
  }
}