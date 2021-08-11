import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
  value = ['red'];

  options = [
    { label: 'Red Marker', value: 'red' },
    { label: 'Blue Marker', value: 'blue' },
    { label: 'Green Marker', value: 'green' },
    { label: 'Black Marker', value: 'black' },
    { label: 'White Marker', value: 'white' },
  ];
  
  @api selectedCheckbox(checkboxValue) {
    const selectedCheckbox = this.options.find(checkbox => {
      return checkboxValue === checkbox.value;
    });

    if(selectedCheckbox) {
      this.value = selectedCheckbox;
      console.log(selectedCheckbox);
      console.log(this.value);
      return 'Successfully checked';
    }
    return 'No checkbox found';
  }
}
