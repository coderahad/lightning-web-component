import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
  cardTitle = "BMI Calculator";

  @track bmiData = {
    height: 0,
    weight: 0,
    result: 0
  }

  onWeightChange(event) {
    this.bmiData.weight = parseFloat(event.target.value);
  }
  
  onHeightChange(event) {
    this.bmiData.height = parseFloat(event.target.value);
  }

  calculateBMI() {
    try{
      this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
    } catch(error) {
      this.bmiData.result = undefined;
    }
  }
}