import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
  value;

  checkboxSelectedHandler() {
    const childComponent = this.template.querySelector('c-public-method-child');
    const returnedMessage = childComponent.selectedCheckbox(this.value);
    console.log(`Returned Message: ${returnedMessage}`);
  }

  onInputChangeHandler(event) {
    this.value = event.target.value;
  }
}
