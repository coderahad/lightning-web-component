import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
  cardTitle = "BMI Calculator";

  changePrivatePropertyHandler() {
    this.cardTitle = 'Changed Value😀';
    console.log(`value ${this.cardTitle}`);
  }
}